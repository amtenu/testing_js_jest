const usersObjectInArray = [
  {
    name: "Amanuel",
    age: 30,
  },
  {
    name: "solomon",
    age: 20,
  },
  {
    name: "Jacob",
    age: 25,
  },
];

usersObjectInArray.push({
  name: "Sara",
  age: 32,
});

describe("Object and Array ", () => {
  test("Object and Array containig", () => {
    expect(usersObjectInArray).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          age: expect.any(Number),
        }),
      ])
    );
  });
});
