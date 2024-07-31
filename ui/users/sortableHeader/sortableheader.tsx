import Link from "next/link";
import styles from "./sortableheader.module.css";
import { ReactNode } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";

type SortableHeaderProps = {
  field: string;
  currentSort: string;
  currentOrder: "asc" | "desc";
  children: ReactNode;
};
const SortableHeader = ({
  field,
  currentSort,
  currentOrder,
  children,
}: SortableHeaderProps) => {
  const newOrder =
    currentSort === field && currentOrder === "asc" ? "desc" : "asc";

  return (
    <td>
      <Link
        href={`?sortBy=${field}&sortOrder=${newOrder}`}
        className={styles.sortLink}
      >
        {children}
        {currentSort === field && (
          <span>
            {currentOrder === "asc" ? (
              <FaSortUp className={styles.sortup} />
            ) : (
              <FaSortDown className={styles.sortdown} />
            )}
          </span>
        )}
      </Link>
    </td>
  );
};

export default SortableHeader;
