import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

type detailsTypes = {
  title: string;
  numbers: number;
};
const card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={30} />
      <div className={styles.content}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.numbers}>10,100</span>
        <span className={styles.details}>
          <span className={styles.positive}>12% </span>
          more than the previous week
        </span>
      </div>
    </div>
  );
};

export default card;
