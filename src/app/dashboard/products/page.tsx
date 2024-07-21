import Link from "next/link";
import Image from "next/image";
import Search from "@/src/ui/dashboard/search/search";
import Pagination from "@/src/ui/dashboard/pagination/pagination";
import styles from "@/src/ui/products/products.module.css";
import { FetchProducts } from "@/src/lib/data";

const Product = async ({ searchParams }: any) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || "1";
  const { productCount, products } = await FetchProducts(q, page);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for products ...." />
        <Link href="/dashboard/products/add-product">
          <button className={styles.addButton}>Add New Product</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <tr key={product._id}>
                <td className={styles.product}>
                  <Image
                    src={product.img}
                    alt="User Image"
                    width={40}
                    height={40}
                    className={styles.image}
                  />
                  {product.title}
                </td>
                <td className={styles.description}>{product.description}</td>
                <td>${product.price}</td>
                <td>
                  {product.createdAt
                    ? new Intl.DateTimeFormat("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      }).format(new Date(product.createdAt))
                    : "N/A"}
                </td>
                <td>{product.stock}</td>
                <td>
                  <div className={styles.buttons}>
                    <Link href={`products/${product._id}`}>
                      <button className={`${styles.button} ${styles.view}`}>
                        View
                      </button>
                    </Link>
                    <Link href="/">
                      <button className={`${styles.button} ${styles.delete}`}>
                        Delete
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination count={productCount} />
    </div>
  );
};

export default Product;
