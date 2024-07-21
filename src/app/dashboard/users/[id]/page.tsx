import styles from "@/src/ui/users/userpage.module.css";
import Image from "next/image";

const UserPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/userIcon.webp" alt="user image" fill></Image>
        </div>
        John Doe
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>User Name</label>
          <input type="text" placeholder="John Doe" />
          <label>Email</label>
          <input
            type="email"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            placeholder="johndoe@gmail.com"
          />
          <label>Phone Number</label>
          <input type="tel" pattern="[0-9]" placeholder="9833656565" />
          <label>Password</label>
          <input
            type="password"
            id="password"
            pattern=".{8,}"
            placeholder="***********"
          />
          <label>Address</label>
          <textarea
            id="address"
            rows={2}
            placeholder="101, Someting omething"
          ></textarea>
          <label>Is user Admin?</label>
          <select id="isAdmin">
            <option value={`true`}>Yes</option>
            <option value={`false`}>No</option>
          </select>
          <label>Is user Active</label>
          <select id="isActive">
            <option value={`true`}>Yes</option>
            <option value={`false`}>No</option>
          </select>

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
