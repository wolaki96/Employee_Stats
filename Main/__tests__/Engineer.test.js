
const Engineer = require("../lib/Engineer");


//test for setter//

test("Can set gitHub to constructor arguments", () => {
    //test value for github
    const testValue = "github.com"
    const e = new Engineer("Joe", 4, "test@gmail.com", testValue);
    expect(e.github).toBe(testValue);
});

// test for getters

test("Can get github from getGithub()", () => {
    const testValue = "github.com";
    const e = new Engineer("Joe", 4, "test@gmail.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});

test("getRole() should return \'Engineer'", () => {
    const testValue = "Engineer";
    const e = new Engineer("Joe", 4, "test@gmail.com", "github.com");
    expect(e.getRole()).toBe(testValue);
});
