const data = {
    code: 42,
    items: [{
        id: 1,
        name: 'foo'
    }, {
        id: 2,
        name: 'bar'
    }]
};

console.log(data);

console.log(data.items);

for (const property in data.items) {
    console.log(`${property}: ${JSON.stringify(data.items[property])}`);
    
  }
  


  const object = {a: 1, b: 2, c: 3};

for (const property in object) {
  console.log(`${property}: ${object[property]}`);


}

let a = {key: 10}
let b = a
a.key = 20
console.log(b)


function a () {
    t = 10
    var t
    return t
    }