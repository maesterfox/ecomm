// function RemoveExclamationMarks which removes all exclamation marks from a given string

function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}

// Sample Tests
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(removeExclamationMarks("Hello World!"), "Hello World");
  });
});
