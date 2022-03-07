
// A colleague of yours has written the following code and is requesting your help.
// This code currently doesn’t work as expected; it should print words that are
// palindrome.
// A palindrome is a word (or any sequence) which can be read the same backward
// as forward. Rotor is a palindrome whereas Rater is not.
// Can you find the mistakes and make this code work?

var words: string[] = ["rater", "rotor"];

function isPalindrome(word: string): boolean {
    
    const reservedText = word.split('').reverse().join('');
    
    if(word == reservedText) {
        console.log(`${word} is a palindrome word `)
        return true;
    } else {
        console.log(`${word} is not a palindrome word `)
        return false;
    }
}

words.forEach(word => {
    isPalindrome(word)
})