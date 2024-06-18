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


