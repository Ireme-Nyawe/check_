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
const data = rows.map(row => row.split(","));
console.log(data);
// Output: [["name", "age", "city"], ["John", "30", "New York"], ["Jane", "25", "Los Angeles"]]
