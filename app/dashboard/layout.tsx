import Navbar from "@/ui/dashboard/navbar/navbar";
import Sidebar from "@/ui/dashboard/sidebar/sidebar";
import Footer from "@/ui/dashboard/footer/footer";
import styles from "@/ui/dashboard/dashboard.module.css";
import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./users/loading";
import { headers } from "next/headers";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Made by Henry@endvidous ",
};

const DashBoardLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const header = headers();
  return (
    <main className={styles.container}>
      <div className={styles.menu}>
        <Suspense fallback={<Loading />}>
          <Sidebar />
        </Suspense>
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
