const Employee = require('./Employee');

class Intern extends Employee {
    //adds the school
    constructor(memberName, id, email, school){
        super(memberName, id, email);
        this.school = school;
    }

getSchool() {
    return this.school;
}

getRole() {
    return "Intern";
}

}

module.exports = Intern;