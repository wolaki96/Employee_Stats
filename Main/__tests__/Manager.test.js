// bring in manager 
const Manager = require("../lib/Manager");

//Test for new variable

test("Can set officeNumber via constructor arguments", () => {
    //variable for office number
    const testValue = "8505910565"
    //variable for new Manager(passing in the variable for the officeNumber here)
    const x = new Manager("Iia", 5, "test@gmail.com", testValue);
    //set up your expect and to be
    expect(x.officeNumber).toBe(testValue);
});

//test for getters//

test("Can get the office number name by getOfficeNumber()", ()  => {
    //variable for test value
    const testValue = "8505910565";
    //variable for new Manager(testValue)
    const x = new Manager("Maggie", 2, "test@email.com", testValue);
    //expect using thye getter, and then your toBe
    expect(x.getOfficeNumber()).toBe(testValue);
});

test("getRole() should return \'Manager'", () => {
    //testValue
    const testValue = "Manager";
    //new Manager("example", testValue)
    const x = new Manager ("Reid", 7, "test@email.com", "8505910565");
    //expect and to be
    expect(x.getRole()).toBe(testValue);
});
