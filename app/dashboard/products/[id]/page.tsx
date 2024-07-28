import { updateProduct } from "@/lib/actions";
import { FetchSingleProduct } from "@/lib/data";
import styles from "@/ui/products/productpage.module.css";
import Image from "next/image";

const UserPage = async ({ params }: { params: { id: string } }) => {
  const product = await FetchSingleProduct(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={product?.img ?? `/noProduct.webp`}
            alt="product image"
            fill
          ></Image>
        </div>
        {product.title}
      </div>

      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <label>Product Name</label>
          <input type="text" placeholder={product.title} />
          <label>Price</label>
          <input
            type="number"
            className={styles.numberInput}
            pattern="*[0-9]"
            placeholder={product.price}
          />
          <label>Size</label>
          <input type="text" placeholder={product.size} />
          <label>Weight</label>
          <input
            type="text"
            id="weight"
            placeholder={product.weight}
            className={styles.numberInput}
          />
          <label>Stock available</label>
          <input
            type="number"
            id="stock"
            placeholder={`${product.stock} units`}
            className={styles.numberInput}
          />
          <label>Category</label>
          <select name="category" id="category" defaultValue={product.category}>
            <option value="general">Choose a Category</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
            <option value="other">Other</option>
          </select>

          <label>Description</label>
          <textarea
            id="description"
            rows={2}
            placeholder={product.description}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
