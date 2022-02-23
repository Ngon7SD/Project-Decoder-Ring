const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should return false if the substitution alphabet is missing", () => {
      const message = "this is a message";
      const actual = substitution(message);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
      const message = "this is a message ";
      const alphabet = "abc";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
      const message = "this is a message ";
      const alphabet = "abc";
      const actual = substitution(message, alphabet);
      expect(actual).to.be.false;
    });

    it("should encode a message by using the given substitution alphabet", () => {
      const message = "this is a message";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet);
      const expected = "djbr br p ykrrpik";

      expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
      const message = "this is a message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "jdxi xi . ysii.rs";

      expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
      const message = "this is a message";
      const alphabet = ".waeszrdxtfcygvuhbijnokmpl";
      const actual = substitution(message, alphabet);
      const expected = "jdxi xi . ysii.rs";

      expect(actual).to.equal(expected);
    });

    it("should decode a message by using the given substitution alphabet", () => {
      const message = "djbr br p ykrrpik";
      const alphabet = "plmoknijbuhvygctfxrdzeswaq";
      const actual = substitution(message, alphabet, false);
      const expected = "this is a message";

      expect(actual).to.equal(expected);
    });
  });