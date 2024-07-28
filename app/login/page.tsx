import { authenticate } from "@/lib/actions";
import styles from "@/ui/login/loginpage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <form action={authenticate} className={styles.form}>
        <label className={styles.text}>Login</label>
        <input name="email" type="text" placeholder="Enter User or Email" />
        <input name="password" type="password" placeholder="Enter Password" />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
