import Link from "next/link";
import styles from "./menuLink.module.css";

interface MenuItem {
  title: string;
  path: string;
  icon: React.ReactNode;
}
const Menulink = ({ item }: { item: MenuItem }) => {
  return (
    <Link href={item.path} className={styles.container}>
      {item.icon}
      {item.title}
    </Link>
  );
};

export default Menulink;
