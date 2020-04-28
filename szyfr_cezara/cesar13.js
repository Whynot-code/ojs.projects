function caesar13(input){
    if (input.length < 1) throw new Error('Argument jest pusty!')
    else if (typeof input !== 'string') throw new Error('To jest liczba!')

    else {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let caesarCipher = {};
    let moveSteps = 13;
    const startLetter = alphabet.charAt(alphabet.length-moveSteps);
    const startLetterPos = alphabet.indexOf(startLetter);
    const alphabetCipher = alphabet.substring(startLetterPos) + alphabet.split(alphabet.substring(startLetterPos)).join('');

    for (let i=0; i < alphabet.length; i++){
        caesarCipher[alphabet.charAt(i)] = alphabetCipher.charAt(i);
        caesarCipher[alphabet.charAt(i).toLowerCase()] = alphabetCipher.charAt(i).toLowerCase();
    }
    
    const regTest = new RegExp("[a-zA-Z]");
    let result =[];

    for (const index of input){

        if (regTest.test(index)) for (const [letter, cipher] of Object.entries(caesarCipher)) {
            index === letter ? result.push(cipher) : null
            }

        else result.push(index)
    }

    return result.join('')
    
    }  
    
}

export { caesar13 }