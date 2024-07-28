"use client";
import { authenticate } from "@/lib/actions";
import styles from "@/ui/login/loginform.module.css";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(authenticate, "");

  return (
    <form action={formAction} className={styles.form}>
      <label className={styles.text}>Login</label>
      <input name="email" type="text" placeholder="Enter User or Email" />
      <input name="password" type="password" placeholder="Enter Password" />
      {state && <p className={styles.error}>{state}</p>}
      <button>Login</button>
    </form>
  );
};

export default LoginForm;
