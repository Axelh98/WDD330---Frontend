const baseURL = import.meta.env.VITE_SERVER_URL

function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

export default class ExternalServices {
  constructor(category) {
    
  }
  async getData(category) {
    const response = await fetch(baseURL + `products/search/${category}`);
    const data = await convertToJson(response);

    console.log(data);  
    return data.Result;
  }
  async findProductById(id) {
    const baseURL = import.meta.env.VITE_SERVER_URL;
    const response = await fetch(`${baseURL}product/${id}`);
  
    if (!response.ok) {
      throw new Error('Producto no encontrado');
    }
    const data = await response.json();
    console.log(data);
    return data.Result; // Ajusta según la estructura de tu API.
  }
  async checkout(payload) {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    };
    return await fetch(baseURL + "checkout/", options).then(convertToJson);
  }
  

}

/**
 
export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `../json/${this.category}.json`;
    const baseURL = import.meta.env.VITE_SERVER_URL
  }
  getData() {
    return fetch(this.path)
      .then(convertToJson)
      .then((data) => data);
  }
  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.Id === id);
  }
}*/