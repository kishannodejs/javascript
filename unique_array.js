// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// Array.from(new Set(array)); // [1, 2, 3, 5, 9, 8]

// // ES5 Implementation
// var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

// console.log(uniqueArray(array)); // [1, 2, 3, 5, 9, 8]

// function uniqueArray(array) {
//   var hashmap = {};
//   var unique = [];

//   for(var i = 0; i < array.length; i++) {
//     // If key returns undefined (unique), it is evaluated as false.
//     if(!hashmap.hasOwnProperty(array[i])) {
//       hashmap[array[i]] = 1;
//       unique.push(array[i]);
//     }
//   }

//   return unique;
// }

var array = ["Manish", "Chandan","Chandan", "Piyush","Manish"];
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
                if ( array[j] == outputArray[k] ) {
                    console.log("------------array[j]===",array[j]);
                    console.log("---------------outputArray[k]===",outputArray[k]);
                    start = true;
                }
            }
            count++;
            console.log("count111===",count);
            if (count == 1 && start == false) {
                console.log("count222===",count);
                console.log("start22222222===",start);
                console.log("array[j]2222===",array[j]);
                outputArray.push(array[j]);
            }
            console.log("count333333333===",count);
            console.log("start333333333===",start);
            start = false;
            count = 0;
        }
        console.log(outputArray);