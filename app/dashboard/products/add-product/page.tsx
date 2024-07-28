import { addProduct } from "@/lib/actions";
import styles from "@/ui/products/addproduct.module.css";

const AddProductPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" placeholder="Product Name" name="title" required />
        <select name="category" id="category">
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
          <option value="other">Other</option>
        </select>
        <input
          className={styles.numberInput}
          type="number"
          placeholder="Price in Dollars $"
          name="price"
        />
        <input
          className={styles.numberInput}
          type="number"
          placeholder="Number of items in stock"
          name="stock"
        />
        <input
          type="text"
          placeholder="Size specifications of the product"
          name="size"
        />
        <input
          className={styles.numberInput}
          type="text"
          placeholder="Weight of the product (kgs)  "
          name="weight"
        />
        <textarea
          name="description"
          id="description"
          rows={13}
          placeholder="Give a short description for the product"
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
        <button type="submit">Submit Your Product</button>
      </form>
    </div>
  );
};

export default AddProductPage;
