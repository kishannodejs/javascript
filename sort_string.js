var str = "something";
var chars = [];
 
for (var i = 0; i < str.length; i++) {
   chars.push(str.charAt(i));
}
 
console.log(chars);

chars = chars.sort().join("");
console.log(chars);