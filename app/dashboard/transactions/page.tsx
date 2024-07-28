import Transactions from "@/ui/dashboard/transactions/transactions";
import styles from "@/ui/transactions/transactions.module.css";

const TransactionPage = () => {
  return (
    <div className={styles.container}>
      <Transactions />
    </div>
  );
};

export default TransactionPage;
