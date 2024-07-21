import styles from "./transactions.module.css";
import Image from "next/image";
const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.user}>
              <Image
                src="/userIcon.webp"
                alt="User profile picture"
                width={40}
                height={40}
                className={styles.image}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>12.02.24</td>
            <td>$30,000</td>
          </tr>
          <tr>
            <td className={styles.user}>
              <Image
                src="/userIcon.webp"
                alt="User profile picture"
                width={40}
                height={40}
                className={styles.image}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>12.02.24</td>
            <td>$30,000</td>
          </tr>
          <tr>
            <td className={styles.user}>
              <Image
                src="/userIcon.webp"
                alt="User profile picture"
                width={40}
                height={40}
                className={styles.image}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>12.02.24</td>
            <td>$30,000</td>
          </tr>
          <tr>
            <td className={styles.user}>
              <Image
                src="/userIcon.webp"
                alt="User profile picture"
                width={40}
                height={40}
                className={styles.image}
              />
              John Doe
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>12.02.24</td>
            <td>$30,000</td>
          </tr>

          {/* {info.map((item) => {
            <tr>
              <td className={styles.user}>
              <Image
                src={"/userIcon.webp"}
                alt="User profile picture"
                width={40}
                height={40}
                className={styles.image}
              />
              {item.name}
            </td>
            <td>
              <span className={`${styles.status} styles.${item.status}`}>
                {item.status}
              </span>
            </td>
            <td>{item.date}</td>
            <td>{item.price}</td>
            </tr>
          })} */}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
