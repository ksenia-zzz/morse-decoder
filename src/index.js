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
    var str = ''; // new string for every 10 symbols
    var result = '';
    var count = expr.length/10; // amount of str-s

    // for every str
    for (var i = 0; i < count; i++) {
       str = expr.substring(i*10, i*10+10); // gets next str (divided to 10) from 10 to 20, ...

       if(str.includes('*')){
        result+=' ';
       }
       else {
        letter = ''; // code in '-' and '.' for every '10' and '11'
        var index = 0; // index of next '1' in str
        // while there are '1' in str; starts with index
        while(str.indexOf('1', index)!==-1) { 
            index = str.indexOf('1', index); // indexOf gets index of symbol '1'; starts with index
            if(str.charAt(index+1) === '1') { // charAt returns symbol in position index + 1
                letter += '-';
            }
            else{
                letter += '.';
            }
            index+=2; // indexOf cuts from the given position
        }

        result += MORSE_TABLE[letter];

       }
    }

    return result;
    
}

module.exports = {
    decode
}