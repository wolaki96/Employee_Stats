
const Employee = require('./Employee');

class Engineer extends Employee {
    //adds the github
    constructor(memberName, id, email, github){
        super(memberName, id, email);
        this.github = github;
    }

getGithub() {
    return this.github;
}

getRole() {
    return "Engineer";
}

}

module.exports = Engineer;