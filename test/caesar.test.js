const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar", () => {
   
   
       it("Should return false if the shift value is equal to 0", () =>{
           const shift = 0;
           const message = "ZERO SHIFT";
           const actual = caesar(message, shift);
           expect(actual).to.be.false;
       })
       it("Should return false if the shift value is less that -25", () =>{
            const shift = -26;
            const message = "NEGATIVE SHIFT GREATER THAN 25";
            const actual = caesar(message, shift, true);
            expect(actual).to.be.false;
        })
        it("Should return false if the shift value is greater than 25", () =>{
            const shift = 26;
            const message = "POSITIVE SHIFT GREATER THAN 25";
            const actual = caesar(message, shift, false)
            expect(actual).to.be.false;
        })
        it("Should return false if the shift value is not present", () => {
            const message = "SHIFT NOT PRESENT";
            const actual = caesar(message);
            expect(actual).to.be.false;
        })
  
       it("Should ignore capital letters", () => {
           const message = "MESSAGE";
           const shift = 10;
           const expected = "wocckqo";
           const actual = caesar(message, shift, true);
           expect(actual).to.be.eql(expected);
       })
       it("Should appropriately handle wrapping shift values", () =>{
        const message = "wxyz";
        const shift = 20;
        const expected = "qrst";
        const actual = caesar(message, shift, true);
        expect(actual).to.be.eql(expected);
       })
       it("Should appropriately maintain spaces and special characters", () =>{
        const message = "w@ x$ y! z";
        const shift = 20;
        const expected = "q@ r$ s! t";
        const actual = caesar(message, shift, true);
        expect(actual).to.be.eql(expected);
       })
})
