function firstNonRepeatedChar(str) {
 // Write your code here
	 let charFreq = {};

    // Populate the map with character frequencies
    for (let char of s) {
        charFreq[char] = (charFreq[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (let char of s) {
        if (charFreq[char] === 2) {
            return char;
        }
    }

    // If no non-repeated character found, return null
    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
