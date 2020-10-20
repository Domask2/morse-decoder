const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  let exprArr = expr.match(/.{1,10}/g);
  let resultMorse = [];

  for (const item of exprArr) {
    if (item === "**********") {
      resultMorse.push(' ');
      continue;
    }

    let morse = '';
    let newItem = item.match(/.{1,2}/g)
    for (const el of newItem) {
      if (el == "10") morse += ".";
      if (el == "11") morse += "-";
    }
    resultMorse.push(morse);
     
  }
  
  let res = '';
  resultMorse.map(item=> {
    item === ' ' ? res+= ' ': res+=MORSE_TABLE[item]
     
  })

 return res;
}

module.exports = {
    decode
}