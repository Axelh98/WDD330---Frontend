import { getParam, loadHeaderFooter } from "./utils.mjs";
import ExternalServices from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

loadHeaderFooter();
// <<<<<<< brunow2--individual
const dataSource = new ExternalServices("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();

    if (!Array.isArray(cart)) {
      cart = [];
    } 

  cart.push(product);

  setLocalStorage("so-cart", cart);

// add to cart button event handler
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id);
  console.log(JSON.parse(localStorage.getItem("so-cart")));

  addProductToCart(product);
}

document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

