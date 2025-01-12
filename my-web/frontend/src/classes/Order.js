class Order {
    static orders = [];
  
    constructor(orderID, userID, orderDate, status = "Pending", items = [], totalAmount = 0, shippingAddress = "") {
      this.orderID = orderID || Date.now();
      this.userID = userID;
      this.orderDate = orderDate;
      this.status = status;
      this.items = items;
      this.totalAmount = totalAmount;
      this.shippingAddress = shippingAddress;
    }
  
    static create(order) {
      Order.orders.push(order);
      return order;
    }
  
    static read() {
      return Order.orders;
    }
  
    static update(orderID, updatedData) {
      const order = Order.orders.find((o) => o.orderID === orderID);
      if (order) {
        Object.assign(order, updatedData);
        return order;
      }
      return null;
    }
  
    static delete(orderID) {
      Order.orders = Order.orders.filter((o) => o.orderID !== orderID);
      return Order.orders;
    }
  }
  