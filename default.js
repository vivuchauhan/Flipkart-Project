import { products } from "./constants/Data.js";
import Product from "./madel/product-schema.js";




const DefaultData = async () => {
  try {
    await Product.insertMany(products);
    console.log('Data imported Successfully');
  } catch (error) {
    console.log('error while inserting default data', error.message);
  }
}

export default DefaultData;
