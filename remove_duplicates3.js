var array = ["Manish", "Chandan", "Piyush","Sunil", "Pankaj", "Piyush", "Pankaj", "Tiny", "Chandan","Manish"];
                       
        var outputArray = [];
          

        var count = 0;
          

        var start = false;
          
        for (j = 0; j < array.length; j++) {
            for (k = 0; k < outputArray.length; k++) {
                if ( array[j] == outputArray[k] ) {
                    start = true;
                }
            }
            count++;
            if (count == 1 && start == false) {
                outputArray.push(array[j]);
            }
            start = false;
            count = 0;
        }
        console.log(outputArray);  