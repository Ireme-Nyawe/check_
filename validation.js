const str = "Hello.";
const alphanumericRegex = /^[a-zA-Z0-9\s]+$/;
if (alphanumericRegex.test(str)) {
    console.log("String contains only alphanumeric characters and spaces.");
}
else{
    console.log("Ivalid");
}
