const ages = [32, 33, 19, 40, ''];
console.log(ages.every(checkAge));

function checkAge(age) {
  return age > 18;
}

const survey = [
  { name: "Steve",   answer: "Yes"},
  { name: "Steve", answer: "Yes"},
  { name: "Steve",   answer: "Yes"},
  { name: "Steve",  answer: "Yes1"}
];

console.log(survey.every(isSameAnswer));

function isSameAnswer(el,index,arr) {
    // Return true for the first element
    if (index === 0){
     
      console.log("IN if");
      console.log(index);
      return true;
    }
    else {
      console.log("IN else");
      console.log(index);
    // Compare the value of the previous element
    console.log("el.answer===",el.answer);
    console.log("arr[index - 1].answer===",arr[index - 1].answer);
      return (el.answer === arr[index - 1].answer);
    }
  }