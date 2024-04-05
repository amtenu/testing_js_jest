describe("Number operation", () => {
  test("1 plus 1 should be equal to 2", () => {
    let a = 1;
    let b = 1;
    expect(a + b).toBe(2);
  });

  test(" 5 plus 6 is not equal to 10", () => {
    let a = 5;
    let b = 6;

    expect(a + b).not.toBe(10);
  });



  






  describe("Testing other matchers", () => {
    test("Testing if a variable is undefined", () => {
      let number = undefined;
      expect(number).not.toBeDefined();
      expect(number).toBeUndefined();
      expect(number).not.toBeNull();
      expect(number).toBeFalsy();
      expect(number).not.toBeTruthy();
    });
  });

  test("Should expect zero to act like zero", () => {
    let number = 0;
    expect(number).toBeDefined();
    expect(number).not.toBeUndefined();
    expect(number).not.toBeNull();
    expect(number).toBeFalsy();
  });

  test("Number Comparision", () => {
    const a = 1;
    const b = 3;

    expect(a + b).toBeGreaterThan(3);
    expect(a + b).toBeGreaterThan(1);
    expect(a + b).toBeGreaterThanOrEqual(4);
  });

  test("There should be no I in team", () => {
    let string = "team";

    expect(string).not.toMatch(/I/);
  });

  test("There is 'stop' in Christopher", () => {
    let string = "Christopher";

    expect(string).toMatch(/stop/);
  });

  const shoppingList = ["Milk", "Onion", "Trash Bags", "banana"];

  test("The shopping list doesn't contain Banana", () => {
    expect(shoppingList).not.toContain("Banana");
    expect(shoppingList).toContain("Onion");
  });
});

//testing primitive types with reference types

describe("Reference Equality", () => {
  const user = {
    name: "Amanuel",
    age: 30,
  };

  user["age"] = 30;

  test("Should return a user object with age of 30", () => {
    expect(user).toEqual({
      name: "Amanuel",
      age: 30,
    });
  });

  test("Should return the name and age key", () => {
    expect(user).toEqual(
      expect.objectContaining({
        name: expect.any(String),
        age: expect.any(Number),
      })
    );
  });

  //testing array Equality

  test("Array Equality", () => {
    const users = ["Amanuel", "Solomon"];

    users.push("Jacob");

    expect(users).toEqual(["Amanuel", "Solomon", "Jacob"]);
    expect(users).toEqual(expect.arrayContaining(["Jacob"]));
    expect(users).toEqual(expect.arrayContaining([expect.any(String)]));
  });
});
