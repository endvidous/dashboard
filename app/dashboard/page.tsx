import styles from "@/ui/dashboard/dashboard.module.css";
import Card from "@/ui/dashboard/card/card";
import Transactions from "@/ui/dashboard/transactions/transactions";
import Chart from "@/ui/dashboard/chart/chart";

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
