const fs = require("fs");

exports.sum = (a, b) => {
  return a + b;
};
exports.filterEvenNumbers = (numbers) => {
  return numbers.filter((number) => number % 2 === 0);
};

exports.deleteByID = (id) => {
  const data = fs.readFileSync("db.json", "utf8");

  console.log("Data read from db.json:", data);//TO TEST
  console.log("Parsed data:", JSON.parse(data));

  const users = JSON.parse(data).users;

  const updatedUsers = users.filter((user) => user.id !== id);

  fs.writeFileSync("db.json", JSON.stringify({ users: updatedUsers }));

  return updatedUsers;
};
