import { getParam, loadHeaderFooter, setLocalStorage, getLocalStorage } from "/js/utils.mjs";
import ExternalServices from "/js/ProductData.mjs";
import ProductDetails from "/js/ProductDetails.mjs";

loadHeaderFooter();
const dataSource = new ExternalServices("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();


let cart = getLocalStorage("so-cart"); 
if (!Array.isArray(cart)) {
  cart = []; 
}

function addProductToCart(product) {
  cart.push(product); // 
  setLocalStorage("so-cart", cart); // Actualiza el almacenamiento local con el carrito actualizado
}

// Event handler para el botón de agregar al carrito
async function addToCartHandler(e) {
  const product = await dataSource.findProductById(e.target.dataset.id); 
  addProductToCart(product); 
  console.log(JSON.parse(localStorage.getItem("so-cart"))); 
}


document
  .getElementById("addToCart")
  .addEventListener("click", addToCartHandler);

