import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Endvidous</div>
      <div className={styles.text}>@ All Rights Reservered</div>
    </div>
  );
};

export default Footer;
