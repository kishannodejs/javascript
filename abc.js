for (var i = 0; i < 3; i++) {
 // setTimeout(function log() {
    console.log(i); // What is logged?
 // }, 1000);
}

// function hoist(){​​​​​​​​
//    a = 10;
// }​​​​​​​​
// console.log("a : ", a);

// function hoist(){​​​​​​​​​
//    a = 10;
//    }​​​​​​​​​
   
//    hoist();
//    console.log("a : ", a);

var arr = [10,2,3,2,4,2,3,5,4,7];

console.log(Array.from(new Set(arr)));


var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

//console.log(Array.from(new Set(array)));


  var hashmap = {};
  var unique = [];

  for(var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.

  //  console.log(hashmap.hasOwnProperty(array[i]));
    if(!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 0;
      unique.push(array[i]);
    }
  }

 

console.log(unique); // [1, 2, 3, 5, 9, 8]