

//bring in employee
const Employee = require("../lib/Employee");
//test for instantiating an Employee instance
test("Can Instantiate Employee instance", () =>{
    const e = new Employee();
    expect(typeof(e)).toBe("object");
});


//TESTS FOR SETTERS//
test("Can set name via constructor arguments", () => {
    //variable for name
    const testValue = "iia"
    //variable for new Employee(passing in the variable for the name here)
    const e = new Employee(testValue);
    //set up your expect and to be
    expect(e.name).toBe(testValue);

});
test("Can set id via constructor argument", () => {
    //variable for the test value, in this case a number since it's an id
    const testValue = 100;
    //variable for new Employee("example name as a string", testValue)
    const e = new Employee ("Iia", testValue);
    //set up your expect and to be
    expect(e.id).toBe(testValue);
});
test("Can set email via constructor arguent", () => {
    //variable for the test value
    const testValue = "test@testmail.com"
    //variable for new Employee("example name", example number, test value)
    const e = new Employee ("Iia", 100, testValue);
    //set up your expect and to be
    expect(e.email).toBe(testValue);
});

//TEST FOR GETTERS//
test("Can get name via getName()", () => {
//variable for test value
const testValue = "Alice";
// variable for new Employee(testValue)
const e = new Employee(testValue)
//expect using the getter, and then your to be
expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    //testValue
const testValue = 100;
    //new Employee("example name", testValue)
const e = new Employee("Bobby", testValue);
    //expect and to be
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    //testValue
const testValue = "test@testemail.com";
    //new Employee("example email", testValue)
const e = new Employee("Joe", 5, testValue);
    //expect and to be
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return 'Employee'", () => {
     //testValue
const testValue = "Employee";
    //new Employee("example", testValue)
const e = new Employee ("Joe", 5, "test@testemail.com");
    //expect and to be
    expect(e.getRole()).toBe(testValue);
})