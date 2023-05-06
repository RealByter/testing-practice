const caesarCipher = (str, shift) => {
  if(shift < 0)
    shift = shift + 26;
  return str.split("").map(char => String.fromCharCode(shiftChar(char.charCodeAt(0), shift))).join("");
}

const shiftChar = (code, shift) => {
  if(65 <= code && code <= 90) 
    code = (code - 65 + shift) % 26 + 65;
  else if(97 <= code && code <= 122) 
    code = (code - 97 + shift) % 26 + 97;
  return code;
}

export default caesarCipher;