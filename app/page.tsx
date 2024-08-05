import Footer from "@/ui/dashboard/footer/footer";
import styles from "@/ui/homepage.module.css";
import Link from "next/link";

const Homepage = () => {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.navbar}>
          <span className={styles.links}>
            <Link className={styles.navbutton} href="/">
              Home Page
            </Link>
            <Link className={styles.navbutton} href="/dashboard">
              Dashboard
            </Link>
          </span>
          <span className={styles.links}>
            <p></p>
            <Link className={styles.navbutton} href="/login">
              Login
            </Link>
          </span>
        </nav>
        <div className={styles.contentcontainer}>
          <div className={styles.text}>
            <h1>Dashboard App Using Next.Js</h1>
            <p>
              This project using Next.js, utilizing its App Router feature for
              efficient routing and state management. The Dashboard App allows
              users to create users, products and more. Built with TypeScript
              and integrated with Cloudinary for file handling, mongoDB and
              mongoose to work on the backend, authentication using auth.js and
              password protection using argon2. This project showcases a full
              stack web app, that is efficient and user friendly.
            </p>
            <span> PS: This is not optimized for mobile usage yet.....</span>
            <span>
              Login as employee using{" "}
              {` email: testuser2@gmail.com, password: testuser120#`}
            </span>
          </div>

          <div className={styles.admindashboard}>
            <h2>Admin Dashboard Page Image</h2>
            <div className={styles.dashboardimg}>
              <img src="/admin.png" alt="" />
            </div>
          </div>

          <div className={styles.admindashboard}>
            <h2>Employee Dashboard Page Image</h2>
            <div className={styles.dashboardimg}>
              <img src="/employee.png" alt="" />
            </div>
          </div>
        </div>
        <Link className={styles.enterbutton} href="/dashboard">
          Enter to know more.....
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
