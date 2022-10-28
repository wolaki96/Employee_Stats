//test for setter//

const Intern = require("../lib/Intern");

test("Can set school to constructor arguments", () => {
    //test value for school
    const testValue = "UCF"
    const e = new Intern("Joe", 4, "test@gmail.com", testValue);
    expect(e.school).toBe(testValue);
});

// test for getters

test("Can get school from getSchool()", () => {
    const testValue = "UCF";
    const e = new Intern("Joe", 4, "test@gmail.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});

test("getRole() should return \'Intern'", () => {
    const testValue = "Intern";
    const e = new Intern("Joe", 4, "test@gmail.com", "UCF");
    expect(e.getRole()).toBe(testValue);
});