import React, { useMemo } from "react";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdChat,
} from "react-icons/md";
import Menulink from "./menuLink/menuLink";
import Image from "next/image";
import { auth, signOut } from "@/app/auth";
import LoadingUI from "@/ui/loading/loading";

type MenuItem = {
  title: string;
  path: string;
  icon: React.ReactNode;
};

type Category = {
  title: string;
  list: MenuItem[];
};

const menuItems: Category[] = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "/dashboard/products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "/dashboard/transactions",
        icon: <MdAttachMoney />,
      },
      {
        title: "Chat",
        path: "/dashboard/chat",
        icon: <MdChat />,
      },
    ],
  },

  {
    title: "User",
    list: [
      {
        title: "Settings [Doesn't exist]",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help [Doesn't exist]",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar: React.FC<{ session: any }> = ({ session }) => {
  if (!session || !session.user) {
    return <LoadingUI />;
  }
  const currentUser = session.user;

  const filteredMenuItems = useMemo(() => {
    return menuItems.map((category) => ({
      ...category,
      list: category.list.filter((menuItem) => {
        if (
          !currentUser.isAdmin &&
          menuItem.path.startsWith("/dashboard/users")
        ) {
          return false;
        }
        return true;
      }),
    }));
  }, [currentUser]);

  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={currentUser.image || "/userIcon.webp"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetails}>
          <span className={styles.userName}>{currentUser.name}</span>
          <span className={styles.userTitle}>
            {currentUser.isAdmin ? "Admin" : "Employee"}
          </span>
        </div>
      </div>
      <ul className={styles.list}>
        {filteredMenuItems.map((category) => (
          <li key={category.title}>
            <span className={styles.cat}>{category.title}</span>
            {category.list.map((menuItem) => (
              <Menulink item={menuItem} key={menuItem.title} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout /> Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
