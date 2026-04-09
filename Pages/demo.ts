//write a function to reverse each word in a string
function reverseWords(str: string): string {
    return str.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

// Example usage:
const input = "Hello World";
const output = reverseWords(input);
console.log(output); // Output: "olleH dlroW"
