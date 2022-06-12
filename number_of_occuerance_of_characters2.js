var str = 'acadbdbadc';

var myobject = {}

var count;

for(i=0; i<str.length; i++){

    count = myobject[str.charAt(i)]

    console.log(count);

    if(count){

        myobject[str.charAt(i)]=count+1;

    } else {
        myobject[str.charAt(i)]=1;
    }

}

console.log(myobject);

for(x in myobject){
console.log(`${x} = ${myobject[x]}`)
}