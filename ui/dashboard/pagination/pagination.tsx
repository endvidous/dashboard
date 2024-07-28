"use client";
import styles from "./pagiination.module.css";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({ count }: { count: number }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);

  const page = searchParams.get("page") || "1";
  const itemsPerPage = 4;

  const hasPrev = itemsPerPage * (parseInt(page) - 1) > 0;
  const hasNext = itemsPerPage * (parseInt(page) - 1) + itemsPerPage < count;

  const handleChangePage = (type: string) => {
    type === "prev"
      ? params.set("page", (parseInt(page) - 1).toString())
      : params.set("page", (parseInt(page) + 1).toString());
    replace(`${pathName}?${params}`);
  };

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${!hasPrev ? styles.disabled : ""}`}
        disabled={!hasPrev}
        onClick={() => handleChangePage("prev")}
      >
        Previous Page
      </button>
      <button
        className={`${styles.button} ${!hasNext ? styles.disabled : ""}`}
        onClick={() => handleChangePage("next")}
      >
        Next Page
      </button>
    </div>
  );
};

export default Pagination;
