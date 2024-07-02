import styles from "@/src/ui/dashboard/dashboard.module.css";
import Card from "@/src/ui/dashboard/card/card";

const DashBoard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default DashBoard;
