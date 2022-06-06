var myarray = [3,7,1,2,9,4];

var n = myarray.length;

var temp="";

for(var i=0; i<n-1; i++){
    for(var j = i+1; j<n; j++){
        if(myarray[i]>myarray[j]){
            temp = myarray[i];
            myarray[i]=myarray[j];
            myarray[j]= temp;
        }
    }
}


console.log(myarray);
