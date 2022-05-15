var obj = {name: "Kishan"};

var obj1 = Object.create(obj);


delete obj1.name;

console.log(obj.name);