const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const isUppercase = (char) => char === char.toUpperCase() && char !== char.toLowerCase();

const getNewIndex = (alphabet, shiftAmount, char) => {
  const index = alphabet.indexOf(char);
  if (index === -1) {
    return char;
  }
  const newIndex = (index + shiftAmount) % 26;
  return alphabet[newIndex];
};

export const caesarCipher = (str, shiftAmount) => {
  return str
    .split("")
    .map((char) => {
      if (isUppercase(char)) {
        return getNewIndex(uppercase, shiftAmount, char);
      } else {
        return getNewIndex(lowercase, shiftAmount, char);
      }
    })
    .join("");
};
