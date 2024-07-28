import { authenticate } from "@/lib/actions";
import styles from "@/ui/login/loginpage.module.css";
import LoginForm from "./loginform/loginform";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
