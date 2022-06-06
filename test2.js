// Var name = ‘test’
// Const getname = () =>{
// console.log(name);
// Var name = ’new name’;
// }; 

// getname();

console.log("a");
setTimeout( () => console.log("check"),0 );
Promise.resolve( () => console.log("b") ).then((res) => res);
console.log("d"); 