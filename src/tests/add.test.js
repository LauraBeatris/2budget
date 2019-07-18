const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => `Hello ${name}!`;

// Jest give us global variables
// --> test

// Two Arguments -> Name and the Code
test("should add two numbers", () => {
  const result = add(3, 4);

  // Received // Expected
  expect(result).toBeLessThan(8);
});

// Writing a new test case
test("should generate the greating from name", () => {
  const result = generateGreeting("laura");

  expect(result).toBe("Hello laura!");
});

test("should generate greating or no name", () => {
  //What we want to make associations about
  const result = generateGreeting();

  expect(result).toBe("Hello Anonymous!");
});
