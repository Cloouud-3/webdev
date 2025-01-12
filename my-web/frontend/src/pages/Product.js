class Product {
    static products = [];
  
    constructor(productID, title, description, price, images = [], quantity = 0, category = null) {
      this.productID = productID || Date.now();
      this.title = title;
      this.description = description;
      this.price = price;
      this.images = images;
      this.quantity = quantity;
      this.category = category;
    }
  
    static create(product) {
      Product.products.push(product);
      return product;
    }
  
    static read() {
      return Product.products;
    }
  
    static update(productID, updatedData) {
      const product = Product.products.find((p) => p.productID === productID);
      if (product) {
        Object.assign(product, updatedData);
        return product;
      }
      return null;
    }
  
    static delete(productID) {
      Product.products = Product.products.filter((p) => p.productID !== productID);
      return Product.products;
    }
  }
  