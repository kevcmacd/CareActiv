function checkmyconnect()
{
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("myDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","php/connect.php",true);
	xmlhttp.send();
}

function createUser()
{
	var fName = document.getElementById("fName").value;
	var lName = document.getElementById("lName").value;
	var uName = document.getElementById("uName").value;
	var pass = document.getElementById("pass").value;
	var squest = document.getElementById("squest").value;
	var sans = document.getElementById("sans").value;
	
	var xmlhttp;
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
	xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
	if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			document.getElementById("userDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","php/insertuser.php?fName=" + fName + "&lName=" + lName + "&uName=" + uName + "&pass=" + pass + "&squest=" + squest + "&sans=" + sans,true);
	xmlhttp.send();
	
}