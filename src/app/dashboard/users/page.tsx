import Search from "@/src/ui/dashboard/search/search";
import Pagination from "@/src/ui/dashboard/pagination/pagination";
import styles from "@/src/ui/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import { FetchUsers } from "@/src/lib/data";

const Users = async ({ searchParams }: any) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { userCount, users } = await FetchUsers(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for users ...." />
        <Link href="/dashboard/users/add-user">
          <button className={styles.addButton}>Add New User</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Joined on</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td className={styles.user}>
                  <Image
                    src={user.img}
                    alt="User Image"
                    width={40}
                    height={40}
                    className={styles.image}
                  />
                  {user.fullName}
                </td>
                <td>{user.email}</td>
                <td>
                  {user.createdAt
                    ? new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }).format(new Date(user.createdAt))
                    : "N/A"}
                </td>
                <td>{user.isAdmin ? `Admin` : `Employee`}</td>
                <td>{user.isActive ? `Active` : `Inactive`}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`/dashboard/users/${user._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <Link href="/">
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={userCount} />
    </div>
  );
};

export default Users;
