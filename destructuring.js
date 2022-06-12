const user = {
  id: 339,
  name: 'Fred',
  age: 42,
  education: {
    degree: 'Masters'
  }
};
const {education: {degree}} = user;
console.log(degree); //prints: Masters


//https://medium.com/@pyrolistical/destructuring-nested-objects-9dabdd01a3b8