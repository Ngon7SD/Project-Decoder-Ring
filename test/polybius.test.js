const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "this is a message";
      const actual = polybius(message);
      const expected = "44324234 4234 11 23513434112251";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "jijijijij";
      const actual = polybius(message);
      const expected = "424242424242424242";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "this is a message";
      const actual = polybius(message);
      const expected = "44324234 4234 11 23513434112251";

      expect(actual).to.equal(expected);
    });

    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "44324234 4234 11 23513434112251";
      const actual = polybius(message, false);
      const expected = "thi/js i/js a message";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "4242";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "1 2 3";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
});

