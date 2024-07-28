import Navbar from "@/src/ui/dashboard/navbar/navbar";
import Sidebar from "@/src/ui/dashboard/sidebar/sidebar";
import Footer from "@/src/ui/dashboard/footer/footer";
import styles from "@/src/ui/dashboard/dashboard.module.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Made by Henry@endvidous ",
};

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
        <Footer />
      </div>
    </main>
  );
};

export default DashBoardLayout;
