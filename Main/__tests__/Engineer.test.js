//bring engineer
const Engineer = require("../lib/Engineer");


//test for new qestion//

test("Can set gitHub to constructor arguments", () => {
    //test value for github
    const testValue = "github.com"
    const x = new Engineer("Joe", 4, "test@gmail.com", testValue);
    expect(x.github).toBe(testValue);
});

// test for getters

test("Can get github from getGithub()", () => {
    const testValue = "github.com";
    const x = new Engineer("Joe", 4, "test@gmail.com", testValue);
    expect(x.getGithub()).toBe(testValue);
});

test("getRole() should return \'Engineer'", () => {
    const testValue = "Engineer";
    const x = new Engineer("Joe", 4, "test@gmail.com", "github.com");
    expect(x.getRole()).toBe(testValue);
});
