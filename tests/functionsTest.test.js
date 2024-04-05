const { sum, deleteByID, filterEvenNumbers } = require("../utils/helper");
const users = require("../db.json");
const fs = require("fs");

describe("Testing functions", () => {
  test("Testing sum", () => {
    expect(sum(5, 7)).toBe(12);
  });
});

// filter.test.js

describe("Filter function", () => {
  test("Filters out even numbers", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const filteredNumbers = filterEvenNumbers(numbers);
    expect(filteredNumbers).toEqual([2, 4, 6, 8, 10]);
  });

  test("Returns an empty array when input is empty", () => {
    const numbers = [];
    const filteredNumbers = filterEvenNumbers(numbers);
    expect(filteredNumbers).toEqual([]);
  });

  test("Returns an empty array when there are no even numbers", () => {
    const numbers = [1, 3, 5, 7, 9];
    const filteredNumbers = filterEvenNumbers(numbers);
    expect(filteredNumbers).toEqual([]);
  });
});



describe("Array delete by ID should delete users by their ID", () => {
  let originalUsers;

  beforeAll(() => {
    // Read the contents of db.json and store it in originalUsers
    const data = fs.readFileSync("db.json", "utf8");
    originalUsers = JSON.parse(data).users;
  });

  test("Deletes user with ID 1", () => {
    // Call the deleteByID function with the user ID to delete
    const result = deleteByID(1);
    // Check if the user with the specified ID is deleted
    expect(result).toEqual([
      {
        id: 2,
        username: "jane_smith",
        name: "Jane Smith",
        email: "jane@gmail.com",
        age: 28,
        address: {
          street: "456 Elm St",
          city: "Sometown",
          state: "NY",
          zipcode: "54321",
          country: "USA",
        },
      },
    ]);
  });

  // Ensure to restore the original users after all tests are done
  afterAll(() => {
    fs.writeFileSync("db.json", JSON.stringify({ users: originalUsers }));
  });
});
