const fs = require("fs");
const users = require("../db.json");

exports.sum = (a, b) => {
  return a + b;
};
exports.filterEvenNumbers = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};

exports.addUserAndReturnTimestamp = (newUser, originalUsers) => {
  if (
    !newUser ||
    typeof newUser !== "object" ||
    !newUser.id ||
    !newUser.username ||
    !newUser.name ||
    !newUser.email ||
    !newUser.age ||
    !newUser.address
  ) {
    throw new Error("Invalid user object.");
  }

  if (originalUsers.some((user) => user.id === newUser.id)) {
    throw new Error("User ID already exists.");
  }

  const spyDateNow = jest
    .spyOn(Date, "now")
    .mockReturnValueOnce(1000)
    .mockReturnValueOnce(3000);

  const startTime = Date.now();
  originalUsers.push(newUser);

  const endTime = Date.now();

  spyDateNow.mockRestore();

  const timestamp = endTime - startTime;

  if (timestamp <= 0) {
    throw new Error("Timestamp is not valid.");
  }

  return { user: newUser, timestamp: timestamp };
};

exports.deleteByID = (id) => {
  const data = fs.readFileSync("db.json", "utf8");

  // console.log("Data read from db.json:", data);//TO TEST
  // console.log("Parsed data:", JSON.parse(data));

  const users = JSON.parse(data).users;

  const updatedUsers = users.filter((user) => user.id !== id);

  fs.writeFileSync("db.json", JSON.stringify({ users: updatedUsers }));

  return updatedUsers;
};
