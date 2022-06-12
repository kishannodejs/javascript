var abc = "Apple";

var n = abc.length;

var chararray = [];

for(i=0; i<n; i++){

    chararray.push(abc.charAt(i));


}

console.log(chararray);


console.log(Array.from(new Set(chararray)))

console.log(Array.from(new Set(abc.split(''))))