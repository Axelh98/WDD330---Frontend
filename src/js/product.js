import { getParam, loadHeaderFooter, setLocalStorage, getLocalStorage } from "/js/utils.mjs";
import ExternalServices from "/js/ProductData.mjs";
import ProductDetails from "/js/ProductDetails.mjs";

loadHeaderFooter();
const dataSource = new ExternalServices("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();
