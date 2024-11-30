import ExternalServices from '../js/ProductData.mjs';
import ProductList from '../js/ProductList.mjs';
import { loadHeaderFooter, getParam } from '../js/utils.mjs';

loadHeaderFooter();

const category = getParam('category');

console.log(category)

if (category) {
  const dataSource = new ExternalServices();
  const listElement = document.querySelector('.product-list');
  const myList = new ProductList(category, dataSource, listElement);
  myList.init();
  console.log(category);
  console.log(listElement);
  console.log(dataSource);
  console.log(myList);


} else {
  console.error("Category parameter is missing in the URL.");
}

