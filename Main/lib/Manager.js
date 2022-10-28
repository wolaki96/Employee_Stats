const Employee = require('./Employee');

class Manager extends Employee {
    //adds the github
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

getOfficeNumber() {
    return this.officeNumber;
}

getRole() {
    return "Manager";
}

}

module.exports = Manager;