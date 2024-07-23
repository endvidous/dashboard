import { updateUser } from "@/src/lib/actions";
import { FetchSingleUser } from "@/src/lib/data";
import styles from "@/src/ui/users/userpage.module.css";
import Image from "next/image";

const UserPage = async ({ params }: { params: { id: string } }) => {
  const user = await FetchSingleUser(params.id);
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={user?.img ?? `/userIcon.webp`}
            alt="user image"
            fill
          ></Image>
        </div>
        {user.fullName}
      </div>

      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <label>User Name</label>
          <input name="fullName" type="text" placeholder={user.fullName} />
          <label>Email</label>
          <input
            type="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            placeholder={user.email}
            name="email"
          />
          <label>Phone Number</label>
          <input
            type="tel"
            pattern="*[0-9]"
            placeholder={user.phoneNo}
            name="phoneNo"
          />
          <label>Password</label>
          <input
            name="password"
            type="password"
            id="password"
            pattern=".{8,}"
            placeholder="Enter a new password"
          />
          <label>Address</label>
          <textarea
            name="address"
            id="address"
            rows={2}
            placeholder={user.address}
          ></textarea>
          <label>Is user Admin?</label>
          <select id="isAdmin" name="isAdmin" defaultValue={user.isAdmin}>
            <option value={`true`}>Yes</option>
            <option value={`false`}>No</option>
          </select>
          <label>Is user Active</label>
          <select id="isActive" name="isActive" defaultValue={user.isActive}>
            <option value={`true`}>Yes</option>
            <option value={`false`}>No</option>
          </select>
          <input type="hidden" name="id" value={user.id} />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
