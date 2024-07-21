import Transactions from "@/src/ui/dashboard/transactions/transactions";
import styles from "@/src/ui/transactions/transactions.module.css";

const TransactionPage = () => {
  return (
    <div className={styles.container}>
      <Transactions />
    </div>
  );
};

export default TransactionPage;
