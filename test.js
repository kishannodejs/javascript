var myArray = ["cat", "tiger","cat", "rat","horse", "horse"]; 

Array.from(new Set(myArray)); 

console.log(Array.from(new Set(myArray)));












// const arr = [1, 2, 3, 4, 5, undefined, '', false, 9, 10, NaN];

// console.log(arr2);

// var n = arr.length;

// var arr2 = [];

// for(var i=0; i<n-1; i++ ){

//     if(arr[i]!='undefined' || arr[i]!='' || arr[i]!=false || arr[i]!=Nan){
//         arr2.push(arr[i])
//     }
// }




// (function(x) {
//     return (function(y) {
//         console.log(x);
//         console.log(y);
//     })(2)
// })(1);


// var b = 1;
// function outer(){
//    	var b = 2
//     function inner(){
//         b++;
//         var b = 3;
//         console.log(b)
//     }
//     inner();
// }
// outer();


// (function () {
//     try {
//         throw new Error();
//     } catch (x) {
//         var x = 1, y = 2;
//         console.log(x);
//     }
//     console.log(x);
//     console.log(y);
// })();

// console.log(arr2);

// // const ages = [32, 33, 16, 40];

// // document.getElementById("demo").innerHTML = ages.filter(checkAdult);

// // function checkAdult(age) {
// //   return age >= 18;
// // }




// // 1. Remove falsy values using filter() method
// // 2. Square the number using map()  method.
// // 3. Sum the even numbers and odd numbers and populate in Array[sumOfEven, sumOfOdd] using reduce() method




