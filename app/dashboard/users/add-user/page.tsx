import { addUser } from "@/lib/actions";
import styles from "@/ui/users/adduser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action={addUser} className={styles.form}>
        <input
          type="text"
          placeholder="Enter Full Name"
          name="fullName"
          required
        />
        <input
          type="email"
          name="email"
          pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          placeholder="Enter a valid email address"
          required
        />

        <input
          type="tel"
          name="phoneNo"
          placeholder="Enter a valid phone number"
          required
        />

        <input
          type="password"
          id="password"
          name="password"
          pattern=".{8,}"
          placeholder="Password must be at least 8 characters long"
          required
        />

        <textarea
          name="address"
          id="address"
          rows={6}
          placeholder="Enter user address"
          required
        ></textarea>

        <select name="isAdmin" id="isAdmin" defaultValue={`false`}>
          <option value={`false`}>Is the user an admin?</option>
          <option value={`true`}>Yes</option>
          <option value={`false`}>No</option>
        </select>

        <select name="isActive" id="isActive" defaultValue={`false`}>
          <option value={`false`}>Is the user active?</option>
          <option value={`true`}>Yes</option>
          <option value={`false`}>No</option>
        </select>
        <label className={styles.imageLabel}>
          <input
            type="file"
            accept="image/*"
            name="img"
            className={styles.imageInput}
          />
          Upload an Image
        </label>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserPage;
