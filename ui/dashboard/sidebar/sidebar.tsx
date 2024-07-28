import React from "react";
import styles from "./sidebar.module.css";
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
  MdChat,
} from "react-icons/md";
import Menulink from "./menuLink/menuLink";
import Image from "next/image";
import { auth, signOut } from "@/app/auth";
import { FetchSingleUser } from "@/lib/data";

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
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar: React.FC = async () => {
  const session = await auth();
  const currentUser = await FetchSingleUser(session?.user?.id as string);
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={currentUser.img ? currentUser.img : "/userIcon.webp"}
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userDetails}>
          <span className={styles.userName}>{currentUser.fullName}</span>
          <span className={styles.userTitle}>
            {currentUser.isAdmin ? "Admin" : "Employee"}
          </span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((category) => (
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
