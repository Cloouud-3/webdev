class User {
    static users = [];
  
    constructor(userID, name, email, hashedPassword, address = "", phoneNumber = "", role = "Customer") {
      this.userID = userID || Date.now();
      this.name = name;
      this.email = email;
      this.hashedPassword = hashedPassword;
      this.address = address;
      this.phoneNumber = phoneNumber;
      this.role = role;
    }
  
    static create(user) {
      User.users.push(user);
      return user;
    }
  
    static read() {
      return User.users;
    }
  
    static update(userID, updatedData) {
      const user = User.users.find((u) => u.userID === userID);
      if (user) {
        Object.assign(user, updatedData);
        return user;
      }
      return null;
    }
  
    static delete(userID) {
      User.users = User.users.filter((u) => u.userID !== userID);
      return User.users;
    }
  }
  