import Search from "@/ui/dashboard/search/search";
import Pagination from "@/ui/dashboard/pagination/pagination";
import styles from "@/ui/users/users.module.css";
import Image from "next/image";
import Link from "next/link";
import { FetchUsers } from "@/lib/data";
import { deleteUser } from "@/lib/actions";
import { auth } from "@/app/auth";
import SortableHeader from "@/ui/users/sortableHeader/sortableheader";

const Users = async ({ searchParams }: any) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const sortBy = searchParams?.sortBy || "createdAt";
  const sortOrder = searchParams?.sortOrder || "desc";
  const { userCount, users } = await FetchUsers(q, page, sortBy, sortOrder);
  const session = await auth();
  const user = session?.user;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for users ...." />
        {user?.isAdmin && (
          <Link href="/dashboard/users/add-user">
            <button className={styles.addButton}>Add New User</button>
          </Link>
        )}
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <SortableHeader
              field="fullName"
              currentSort={sortBy}
              currentOrder={sortOrder}
            >
              Name
            </SortableHeader>
            <td>Email</td>
            <SortableHeader
              field="createdAt"
              currentSort={sortBy}
              currentOrder={sortOrder}
            >
              Joined on
            </SortableHeader>
            <SortableHeader
              field="isAdmin"
              currentSort={sortBy}
              currentOrder={sortOrder}
            >
              Role
            </SortableHeader>
            <SortableHeader
              field="isActive"
              currentSort={sortBy}
              currentOrder={sortOrder}
            >
              Status
            </SortableHeader>
            <td>Actions</td>
          </tr>
        </thead>
        {/* <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Joined on</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead> */}
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user.id}>
                <td className={styles.user}>
                  <Image
                    src={user?.img ?? `/userIcon.webp`}
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
                    <Link href={`users/${user.id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <form action={deleteUser}>
                      <input type="hidden" name="id" value={user.id} />
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </form>
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
