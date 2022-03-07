// We need to design a function that determines if a word begins with a vowel and
// ends with this same letter.

// In our case:
// ● A word is a string exclusively composed by letters (upper and lower cases).
// ● A vowel is one of the following letters: a, e, i, o, u.
// ● We do not care about accents for this exercise.

function checkWord(word: string): boolean {

    const vowelsArr = ['a', 'e', 'i', 'o', 'u'];

    // Validation for having letters only
    const letterValidation = !/[^a-zA-Z]/.test(word);

    // Getting first and last letter of the word
    const firstLetter = word.charAt(0).toLowerCase();
    const lastLetter = word.slice(-1).toLowerCase();

    // Check if the word starts with a vowel letter
    const hasVowel = vowelsArr.indexOf(firstLetter) > -1;

    if( hasVowel && firstLetter === lastLetter && letterValidation) {
        console.log(`${word} begins with a vowel and ends with this same letter`);
    } else {
        console.log(`${word} doesn't meet the requirments`)
    }
    return;
}

// Testing
checkWord('ear')
checkWord('eye')
checkWord('Eye')
checkWord('eYe')
checkWord('eyE')
checkWord('eya')
checkWord('e5e')
checkWord('e?e')