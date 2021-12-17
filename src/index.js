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
    const phrase = expr.match(/.{1,10}/g);
    const arrayMorseSymbol = phrase.map( element => {
      if (element === '**********') {
        return ' '
      } else {
        let payload = element.substring((element.indexOf('1')))
        let dotDash = payload.match(/.{1,2}/g);
        let morseSymbol = dotDash.map( e => e < 11 ? '.' : '-').join('');
        return MORSE_TABLE[morseSymbol];
      }
    } )
     
    return arrayMorseSymbol.join('');
}

module.exports = {
    decode
}