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

function insertUser()
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
	xmlhttp.open("GET","php/insertuser.php?fName=" + fName
										+ "&lName=" + lName
										+ "&uName=" + uName
										+ "&pass=" + pass
										+ "&squest=" + squest
										+ "&sans=" + sans,true);
	xmlhttp.send();
	
}

function insertClient()
{
	var fName = document.getElementById("fName").value;
	var lName = document.getElementById("lName").value;
	var dob = document.getElementById("dob").value;
	var sex = document.getElementById("sex").value;
	var loc = document.getElementById("loc").value;
	var toc = document.getElementById("toc").value;
	var allg = document.getElementById("allg").value;
	var cond = document.getElementById("cond").value;
	var pcp = document.getElementById("pcp").value;
	var emc = document.getElementById("emc").value;
	var emp = document.getElementById("emp").value;
	var id = 6;
	
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
			document.getElementById("clientDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","php/insertclient.php?fName=" + fName
										+ "&lName=" + lName
										+ "&dob=" + dob
										+ "&sex=" + sex
										+ "&loc=" + loc
										+ "&toc=" + toc
										+ "&allg=" + allg
										+ "&cond=" + cond
										+ "&pcp=" + pcp
										+ "&emc=" + emc
										+ "&emp=" + emp
										+ "&id=" + id,true);
	xmlhttp.send();
	
	//window.location.href = "clientsel.html";
}

function insertRoutine()
{
	var sDate = document.getElementById("sDate").value;
	var tDesc = document.getElementById("tDesc").value;
	var sTime = document.getElementById("sTime").value;
	var tCare = document.getElementById("tCare").value;
	var tIns = document.getElementById("tIns").value;
	var rDate = document.getElementById("rDate").value;
	var eTime = document.getElementById("eTime").value;
	var id = 1;
	
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
			document.getElementById("routineDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","php/insertroutine.php?id=" + id
										+ "&sDate=" + sDate
										+ "&tDesc=" + tDesc
										+ "&sTime=" + sTime
										+ "&tCare=" + tCare
										+ "&tIns=" + tIns
										+ "&rDate=" + rDate
										+ "&eTime=" + eTime,true);
	xmlhttp.send();
	
	//window.location.href = "routines.html";
	
}

function insertAppointment()
{
	var aDate = document.getElementById("aDate").value;
	var lLoc = document.getElementById("lLoc").value;
	var lDesc = document.getElementById("lDesc").value;
	var sTime = document.getElementById("sTime").value;
	var eTime = document.getElementById("eTime").value;
	var id = 1;
	
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
			document.getElementById("appDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","php/insertappointment.php?id=" + id
										+ "&aDate=" + aDate
										+ "&lLoc=" + lLoc
										+ "&lDesc=" + lDesc
										+ "&sTime=" + sTime
										+ "&eTime=" + eTime,true);
	xmlhttp.send();
	
	//window.location.href = "appointments.html";
	
}

function insertMedication()
{
	var aDate = document.getElementById("aDate").value;
	var lDesc = document.getElementById("lDesc").value;
	var sTime = document.getElementById("sTime").value;
	var eTime = document.getElementById("eTime").value;
	var lCare = document.getElementById("lCare").value;
	var lIns = document.getElementById("lIns").value;
	var lRep = $(".mySelect option:selected").val()
	var dRep = document.getElementById("dRep").value;
	var lMed = document.getElementById("lMed").value;
	var id = 1;
	
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
			document.getElementById("medDiv").innerHTML=xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","php/insertmedication.php?id=" + id
										+ "&aDate=" + aDate
										+ "&lDesc=" + lDesc
										+ "&sTime=" + sTime
										+ "&eTime=" + eTime
										+ "&lCare=" + lCare
										+ "&lIns=" + lIns
										+ "&lRep=" + lRep
										+ "&dRep=" + dRep
										+ "&lMed=" + lMed,true);
	xmlhttp.send();
	
	//window.location.href = "medication.html";
}