var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

console.log(Array.from(new Set(array)));


  var hashmap = {};
  var unique = [];

  for(var i = 0; i < array.length; i++) {
    // If key returns undefined (unique), it is evaluated as false.

    console.log(hashmap.hasOwnProperty(array[i]));
    if(!hashmap.hasOwnProperty(array[i])) {
      hashmap[array[i]] = 0;
      unique.push(array[i]);

      console.log("hashmap===");
      console.log(hashmap);
      console.log("===hashmap");

      console.log("unique===");
      console.log(unique);
      console.log("===unique");
    }
  }

 

console.log(unique); // [1, 2, 3, 5, 9, 8]