import { updateProduct } from "@/lib/actions";
import { FetchSingleProduct } from "@/lib/data";
import styles from "@/ui/products/productpage.module.css";
import Image from "next/image";

const ProductPage = async ({ params }: { params: { id: string } }) => {
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
          <input name="title" type="text" value={product.title} />
          <label>Price</label>
          <input
            name="price"
            type="number"
            className={styles.numberInput}
            pattern="*[0-9]"
            value={product.price}
          />
          <label>Size</label>
          <input name="size" type="text" value={product.size} />
          <label>Weight</label>
          <input
            name="weight"
            type="text"
            id="weight"
            value={product.weight}
            className={styles.numberInput}
          />
          <label>Stock available</label>
          <input
            name="stock"
            type="number"
            id="stock"
            value={product.stock}
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
            value={product.description}
            name="description"
          ></textarea>
          <label className={styles.imageLabel}>
            <input
              type="file"
              accept="image/*"
              name="img"
              className={styles.imageInput}
            />
            Upload an Image
          </label>
          <input type="hidden" name="id" value={product.id} />

          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default ProductPage;
