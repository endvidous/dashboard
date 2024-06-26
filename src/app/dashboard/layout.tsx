import Navbar from "@/src/ui/dashboard/navbar/navbar";
import Sidebar from "@/src/ui/dashboard/sidebar/sidebar";
import styles from "@/src/ui/dashboard/dashboard.module.css";

const DashBoardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
    </main>
  );
};

export default DashBoardLayout;
