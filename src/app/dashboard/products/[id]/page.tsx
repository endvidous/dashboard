import styles from "@/src/ui/products/productpage.module.css";
import Image from "next/image";

const UserPage = ({ params }: { params: { id: string } }) => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imageContainer}>
          <Image src="/noProduct.jpg" alt="product image" fill></Image>
        </div>
        {params.id}
      </div>

      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <label>Product Name</label>
          <input type="text" placeholder={params.id} />
          <label>Price</label>
          <input
            type="number"
            className={styles.numberInput}
            pattern="[0-9]"
            placeholder="$100"
          />
          <label>Size</label>
          <input
            type="number"
            className={styles.numberInput}
            pattern="[0-9]"
            placeholder="10-10-10"
          />
          <label>Weight</label>
          <input
            type="number"
            id="weight"
            placeholder="100kgs"
            className={styles.numberInput}
          />
          <label>Stock available</label>
          <input
            type="number"
            id="stock"
            placeholder="200 units"
            className={styles.numberInput}
          />
          <label>Category</label>
          <select name="category" id="category">
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
            placeholder="101, Someting omething"
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default UserPage;
