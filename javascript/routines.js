window.onload = function getRoutines()
{
	var id = 0;
	
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
			document.getElementById("activityList").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","php/getroutines.php?id=" + id,true);
	xmlhttp.send();
}