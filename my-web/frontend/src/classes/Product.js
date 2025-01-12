class Product {
    static permaProducts = [];
  
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

Product.permaProducts = [
  {
    id: 1,
    title: "Victoria's Rush",
    description: "A vibrant and energizing fragrance with a mix of floral and fruity notes that embodies confidence and elegance.",
    price: 850,
    img: '/src/assets/Victoria-Rush.png', 
  },
  {
    id: 2,
    title: "Victoria's Pure",
    description: "A delicate and light scent that captures the essence of purity and freshness with its subtle floral tones.",
    price: 900,
    img: '/src/assets/Victoria-Pure.png',
  },
  {
    id: 3,
    title: "Victoria's Lush",
    description: "A luxurious and indulgent aroma that combines rich florals and a touch of sweet vanilla for a timeless allure.",
    price: 950,
    img: '/src/assets/Victoria-Lush.png',
  },
  {
    id: 4,
    title: "Victoria's Lone",
    description: "A bold and captivating fragrance with deep musky undertones, designed for the independent and confident spirit.",
    price: 980,
    img: '/src/assets/Victoria-Lone.png',
  },
  {
    id: 5,
    title: "Victoria's Temptation",
    description: "An irresistibly seductive scent blending exotic fruits and warm vanilla for a truly enchanting experience.",
    price: 1000,
    img: '/src/assets/Victoria-Temptation.png',
  },
]

export default Product