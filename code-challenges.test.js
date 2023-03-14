// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// PC: Create a function giveEmTheOlShiftAndShuff
// Input: An array of at least two items
// Output: An array with the first item removed, and the remaining items in a shuffled order
// - Remove the first item of the array with .shift()
// - Use the Fisher-Yates algorithm to shuffle the remaining items
//  - The Fisher-Yates algorithm iterates through the array,starting at the end and working to the beginning. creating a temporary placeholder variable 'temp', assigns the current index to temp,  then takes a random index (using Math.floor(Math.random())) and places it into the current index.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("giveEmTheOlShiftAndShuff", () => {
  const colors1 = ["purple", "blue", "green", "yellow", "pink"];
  // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
  const colors1Expected = ["yellow", "blue", "pink", "green"];
  const colors2 = [
    "chartreuse",
    "indigo",
    "periwinkle",
    "ochre",
    "aquamarine",
    "saffron",
  ];
  // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
  const colors2Expected = [
    "saffron",
    "aquamarine",
    "periwinkle",
    "indigo",
    "ochre",
  ];

  const giveEmTheOlShiftAndShuff = (array) => {
    array.shift();
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  it("Removes the first item in an array and shuffles the remaining items", () => {
    expect(giveEmTheOlShiftAndShuff(colors1)).toEqual(
      expect.arrayContaining(colors1Expected)
    );
    expect(giveEmTheOlShiftAndShuff(colors1)).not.toEqual(
      expect.arrayContaining(["purple"])
    );
    expect(giveEmTheOlShiftAndShuff(colors2)).toEqual(
      expect.arrayContaining(colors2Expected)
    );
    expect(giveEmTheOlShiftAndShuff(colors2)).not.toEqual(
      expect.arrayContaining(["chartreuse"])
    );
  });
});

// b) Create the function that makes the test pass.

// PASS  ./code-challenges.test.js
// giveEmTheOlShiftAndShuff
//   ✓ Removes the first item in an array and shuffles the remaining items (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        0.497 s, estimated 1 s
// Ran all test suites.

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

//PC: Create a function karmaTracker
//input - object with two key: value pairs. Keys are upVotes and downVotes, values are positive integers
//output - Integer that is the result of difference between upVotes and downVotes, which can be negative
// Create a function karmaTracker
// access the two values of the object using dot notation
// subtract the downVotes from the upVotes and return the difference

// a) Create a test with expect statements for each of the variables provided.

describe("karmaTracker", () => {
  const votes1 = { upVotes: 13, downVotes: 2 };
  const votes1Expect = 11; // Expected output: 11
  const votes2 = { upVotes: 2, downVotes: 33 };
  const votes2Expect = -31; // Expected output: -31

  const karmaTracker = (votes) => {
    return votes.upVotes - votes.downVotes;
  };

  it("Returns a tally of the upvotes and downvotes received", () => {
    expect(karmaTracker(votes1)).toEqual(votes1Expect);
    expect(karmaTracker(votes2)).toEqual(votes2Expect);
  });
});
// b) Create the function that makes the test pass.

// PASS  ./code-challenges.test.js
// giveEmTheOlShiftAndShuff
//   ✓ Removes the first item in an array and shuffles the remaining items (2 ms)
// karmaTracker
//   ✓ Returns a tally of the upvotes and downvotes received

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total
// Snapshots:   0 total
// Time:        0.436 s, estimated 1 s
// Ran all test suites.

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

//PC: Create a function that takes two arrays and returns a combined array with no duplicate values
// Input: some number of arrays of strings
// Output: One array with the contents of the given arrays, excluding duplicates

//Create a function arrayCombiner with (...args)
// create an array combinedArray to hold values
//
// use .forEach to map through each array, using a conditional to see if the current value is contained in comvinedArray, if not, .push() the value into the array, if it is, do nothing
// return the combinedArray

// a) Create a test with an expect statement using the variables provided.

describe("arrayCombiner", () => {
  let dataArray1 = ["array", "object", "number", "string", "Boolean"];
  let dataArray2 = ["string", "null", "Boolean", "string", "undefined"];
  let expected = [
    "array",
    "object",
    "number",
    "string",
    "Boolean",
    "null",
    "undefined",
  ];
  const arrayCombiner = (...args) => {
    let combinedArray = [];
    args.forEach((array) => {
      array.forEach((string) => {
        if (!combinedArray.includes(string)) {
          combinedArray.push(string);
        }
      });
    });
    return combinedArray;
  };

  it("Combines two arrays and removees duplicates", () => {
    expect(arrayCombiner(dataArray1, dataArray2)).toEqual(expected);
  });
});

// b) Create the function that makes the test pass.

// PASS  ./code-challenges.test.js
// giveEmTheOlShiftAndShuff
//   ✓ Removes the first item in an array and shuffles the remaining items (3 ms)
// karmaTracker
//   ✓ Returns a tally of the upvotes and downvotes received (1 ms)
// arrayCombiner
//   ✓ Combines two arrays and removees duplicates (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total
// Snapshots:   0 total
// Time:        0.487 s, estimated 1 s
// Ran all test suites.
