/** we can change the string into array using split()
 * string.split(separator, limit)
 */
var str = "Hello World";
var result = str.split(" ");
console.log(result); // Output: ["Hello", "World"]

// Using a Comma as Separator:
str = "apple,banana,cherry";
result = str.split(",");
console.log(result); // Output: ["apple", "banana", "cherry"]

// split with limit
str = "one,two,three,four,five";
result = str.split(",", 3);
console.log(result); // Output: ["one", "two", "three"]

//  spliting character
str = "Hello";
result = str.split("");
console.log(result); // Output: ["H", "e", "l", "l", "o"]

// parsig csv data
const csv = "name,age,city\nJohn,30,New York\nJane,25,Los Angeles";
const rows = csv.split("\n");
const data = rows.map((row) => row.split(","));
console.log(data);
// Output: [["name", "age", "city"], ["John", "30", "New York"], ["Jane", "25", "Los Angeles"]]

// extracting words from sentences
const sentence = "The quick brown fox jumps over the lazy dog";
const words = sentence.split(" ");
console.log(words);
// Output: ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"]

// spliting by multiple delimiters
str = "apple;banana,orange|grape";
result = str.split(/[,;|]/);
console.log(result);
// Output: ["apple", "banana", "orange", "grape"]

// split and change to number
str = "1,2,3,5,3";
result = str.split(",").map(Number);
console.log(result);
