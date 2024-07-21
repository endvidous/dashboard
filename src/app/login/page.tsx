import styles from "@/src/ui/login/loginpage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.form}>
        <label className={styles.text}>Login</label>
        <input type="text" placeholder="Enter User or Email" />
        <input type="password" placeholder="Enter Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
