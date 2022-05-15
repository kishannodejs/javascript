var array = ["Piyush","Sunil", "Pankaj", "Piyush", "Pankaj", "Tiny"];

var outputArray = [];

// Count variable is used to add the
// new unique value only once in the
// outputArray.
var count = 0;

// Start variable is used to set true
// if a repeated duplicate value is 
// encontered in the output array.
var start = false;

for (j = 0; j < array.length; j++) {
for (k = 0; k < outputArray.length; k++) {
  console.log("Check for loop For Equal TTTTTTTTTTTTTTTTTTTTTTTTT")
if ( array[j] == outputArray[k] ) {
  console.log(array[j] +" == "+ outputArray[k]);
  console.log("FIRSTKKKKKKKKKKKKKKKKKKKKKK");
  console.log("j===",j);
  console.log("k===",k);
  console.log("LENGHTKKKKKKKKKKK",outputArray.length)
console.log("-----this is duplicate-------array[j]===",array[j]);
console.log("------this is duplicate---------outputArray[k]===",outputArray[k]);
console.log("LASTKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK");
start = true;
}
}

count++;
console.log("count111===",count);
if (count == 1 && start == false) {
  console.log("\n START");
console.log("count222===",count);
console.log("start22222222===",start);
console.log("array[j]2222===",array[j]);
outputArray.push(array[j]);
console.log("END \n");
}
console.log("count333333333===",count);
console.log("start333333333===",start);
console.log(outputArray);  
start = false;
count = 0;
}
console.log(outputArray);  
