function palindrome() {
		var a, b, no, temp = 0;
		no = Number(121);
		b = no;
		while (no > 0)
		{
		a = no % 10;
        
		no = parseInt( no / 10);
		temp = temp*10 + a;

        console.log(`${a}==a`);
        console.log(`${no}==no`);
        console.log(`${temp}==temp`);

		}
		if (temp == b)
		{
		console.log( "It is a Palindrome Number");
		}
		else
		{
            console.log ("it is not a Palindrome Number");
		}
		}
        

        console.log(palindrome());