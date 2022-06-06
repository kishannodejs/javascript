const people = {  
    printIntroduction: function ()  
     {  
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);  
    }  
  };  
  const me = Object.create(people);  
  me.name = "Marry"; // "name" is a property set on "me", but not on "person"  
  me.isHuman = true; // inherited properties can be overwritten  
  me.printIntroduction();  