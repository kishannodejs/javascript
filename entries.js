 const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const f = fruits.entries();
    console.log(f);
    let i='';
    for (let x of f) {
      i+= x + "\n";
    }
    
    console.log(i);