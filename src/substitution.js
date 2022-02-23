// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    if (!alphabet || alphabet.length !== 26 ) return false; // no alphabet or if length is not 26, return false
    if(Array.from(new Set(alphabet)).length !== 26) return false // Array.from() will convert "new Set" to an array, if there are duplicates, the "Set" method will determine that, and if it's not = to 26 it will be false. 
    let orderAlphabet = "abcdefghijklmnopqrstuvwxyz"
    alphabet = alphabet.split('') //spliting the given alphabet into an array
    input = input.toLowerCase() //lower case the input
    
    let solving = {}
    let decoding = {}
    let result = ''
    orderAlphabet.split('').forEach((letter, index) => {   
      solving[letter] = alphabet[index] // generating encode object
      decoding[alphabet[index]] = letter // generating decode object
    })
    if (!encode) solving = decoding 
    input.split('').forEach(input =>{
      result += input === ' ' ? ' ' : solving[input] // if theres a space return the space, if not return the solved input.
    })
    return result
  }

  return {
    substitution,
  };
})();


module.exports = { substitution: substitutionModule.substitution };
