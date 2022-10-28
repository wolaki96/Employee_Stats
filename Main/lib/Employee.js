class Employee {
    
    constructor(memberName, id, email) {
      this.memberName = memberName;
      this.id = id;
      this.email = email;
    }
  
    getName() {
      return this.memberName;
    }
  
    getId() {
      return this.id;
    }
  
    getEmail() {
      return this.email;
    }
  
    getRole() {
      return "Employee";
    }
  
  }
  
  module.exports = Employee;