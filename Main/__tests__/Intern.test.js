//bring intern

const Intern = require("../lib/Intern");

// new intern question
test("Can set school to constructor arguments", () => {
    //test value for school
    const testValue = "UCF"
    const x = new Intern("Joe", 4, "test@gmail.com", testValue);
    expect(x.school).toBe(testValue);
});

// test for getters

test("Can get school from getSchool()", () => {
    const testValue = "UCF";
    const x = new Intern("Joe", 4, "test@gmail.com", testValue);
    expect(x.getSchool()).toBe(testValue);
});

test("getRole() should return \'Intern'", () => {
    const testValue = "Intern";
    const x = new Intern("Joe", 4, "test@gmail.com", "UCF");
    expect(x.getRole()).toBe(testValue);
});