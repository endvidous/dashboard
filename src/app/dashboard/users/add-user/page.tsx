import styles from "@/src/ui/users/adduser.module.css";

const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <input
          type="text"
          placeholder="Enter Full Name"
          name="username"
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
          name="phone"
          pattern="[0-9]"
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

        <select name="isAdmin" id="isAdmin">
          <option value={`false`} selected>
            Is the user an admin?
          </option>
          <option value={`true`}>Yes</option>
          <option value={`false`}>No</option>
        </select>

        <select name="isActive" id="isActive">
          <option value={`false`} selected>
            Is the user active?
          </option>
          <option value={`true`}>Yes</option>
          <option value={`false`}>No</option>
        </select>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserPage;
