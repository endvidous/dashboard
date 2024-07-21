import styles from "@/src/ui/dashboard/dashboard.module.css";
import Card from "@/src/ui/dashboard/card/card";
import Transactions from "@/src/ui/dashboard/transactions/transactions";
import Chart from "@/src/ui/dashboard/chart/chart";

const data = [{}];

const DashBoard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cards}>
        <Card />
        <Card />
        <Card />
      </div>
      <Transactions />
      <Chart />
    </div>
  );
};

export default DashBoard;
