var random_number =  Math.floor(Math.random()*101);
a = [];

function new_element(){
	new_number = document.getElementById('array').value;
	size = a.push(new_number);
	if(size == 10 || new_number == random_number)
	{
		if(size == 10)
			{
				alert("random number is "+random_number);
			}
		if(new_number == random_number)
			{
				alert("you win");
			}
			location.reload();
	}
	document.getElementById('counter').innerHTML = "Guess left:- " + (10-size);
	document.getElementById('show').innerHTML = "";
	getmesomehelp();
	for(x in a)
	{
		document.getElementById('show').innerHTML += a[x] + " ";
	}
}

function getmesomehelp()
{
	var str1 = "remainder will be ",str2 = "when random number is divided by";
	if(random_number%2==0)
	{
		document.getElementById('help1').innerHTML = str1 + "0 " +str2 +  " 2 and";	
	}
	else if(random_number%3==0)
	{
		document.getElementById('help1').innerHTML = str1 + "3 " + str2 + " 0 and";	
	}
	if(random_number<50)
	{
		document.getElementById('help2').innerHTML = "maybe random number is equal or less than 50";	
	}
	else if(random_number>50)
	{
		document.getElementById('help2').innerHTML = "maybe random number is equal or greater than 50";
	}
}