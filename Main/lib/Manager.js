const Employee = require('./Employee');

class Manager extends Employee {
    //adds the github
    constructor(memberName, id, email, officeNumber){
        super(memberName, id, email);
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