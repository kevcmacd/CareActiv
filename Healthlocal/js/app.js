


// This function gets the items array from local storage
function getItems()
{
	// See if items is inside localStorage
	if (localStorage.getItem("items"))
	{
		// If yes, then load the existing courses
		items = JSON.parse(localStorage.getItem("items"));
	}
	else
	{
		// Make a new array of items
		items = new Array();

		// Save into local storage
		localStorage.setItem("items", JSON.stringify(items));
	}

	return items;
}

// This function gets the login array from local storage
function getLogin()
{
	// See if items is inside localStorage
	if (localStorage.getItem("login"))
	{
		// If yes, then load the existing courses
		login = JSON.parse(localStorage.getItem("login"));
	}
	else
	{
		// Make a new array of items
		login = new Array();
		login = [{username: "admin" ,passwrd: "password"}];

		// Save into local storage
		localStorage.setItem("login", JSON.stringify(login));
	}
	
	return login;
}

// This function gets the activity array from local storage
function getAct()
{
	// See if items is inside localStorage
	if (localStorage.getItem("activity"))
	{
		// If yes, then load the existing courses
		activity = JSON.parse(localStorage.getItem("activity"));
	}
	else
	{
		// Make a new array of items
		activity = new Array();
		activity = ["Reading", "Gymnastics", "Violin", "Drawing", "Playing", "Homework", "Writing", "Helping Mom"];
				

		// Save into local storage
		localStorage.setItem("activity", JSON.stringify(activity));
	}
	
	return activity;
}

// This function saves the items array to local storage
function saveItems(items)
{
	// Save the list into localStorage
	localStorage.setItem("items", JSON.stringify(items));
}

// This function adds the username and passwprd to the login array
function addUser()
{
	// Retrieve the entered form data
	var username = $("#uname1").val();
	var passwrd = $("#upassword1").val();
	
	// Fetch the existing items
	login = getLogin();
	
	// Push the new item into the existing list
	login.push({
		username: username,
		passwrd: passwrd
	});
	
	// Store the new list
	localStorage.setItem("login", JSON.stringify(login));
		
}

// This function add the activity to the activity select list array
function addActivity()
{
	// Retrieve the entered form data
	var newAct = $("#addActTxt").val();
		
	// Fetch the existing items
	act = getAct();
	
	// Push the new item into the existing list
	act.push(
		newAct
	);
	
	// Store the new list
	localStorage.setItem("activity", JSON.stringify(act));
}

// This function checks to see if the end time is before the start time, and set a flag
function checkTime()
{
	var hourStart = Number($('#selectHourStart').val());
	var minStart = Number($('#selectMinStart').val());
	var ampmStart = $('#selectAMPMStart').val();
	var hourEnd = Number($('#selectHourEnd').val());
	var minEnd =  Number($('#selectMinEnd').val());
	var ampmEnd = $('#selectAMPMEnd').val();
	var check;
	
	if (ampmStart == "pm"){
		hourStart = hourStart + 12;
	}
		
	if (ampmEnd == "pm"){
		hourEnd = hourEnd + 12;
	}
		
	if((hourStart <= hourEnd) && (minStart <= minEnd)){
		check = 1;
		localStorage.setItem('check', check);
	}
	else{check = 0;
		localStorage.setItem('check', check);}
}


// This function adds the activity information to an array 
function add()
{
	// Retrieve the entered form data
	var title = $("#activity").val();
	var date = $("#tododay1").val();
	var description = $('#description').val();
	
	checkTime();
	
	var check = localStorage.getItem("check")
	
	if(check == "0"){
		alert ("I couldn't get my popup working so I had to use this.\n\nYou can't have your activity end before it starts!\n\n" );
		window.location.href="viewempty.html";
	}
	else{		
	
	var starttime = $('#selectHourStart').val() + ":" + $('#selectMinStart').val() +" "+ $('#selectAMPMStart').val();
	var endtime = $('#selectHourEnd').val() + ":" + $('#selectMinEnd').val() +" "+ $('#selectAMPMEnd').val();
	
	// Fetch the existing items
	items = getItems();
	
	// Push the new item into the existing list
	items.push({
		title: title,
		description: description,
		date: date,
		starttime: starttime,
		endtime: endtime
	});
	
	// Store the new list
	saveItems(items);
	
	alert ("I couldn't get my popup working so I had to use this.\n\nSaving....\n\n" );
	
	// Reload the page to show the new item
	window.location.href="todo.html";
	}
}

// this functiom displays the activity information 
function display()
{
	// Retrieve the entered form data
	var id = window.location.href.split('?')[1];
	var title = $('#activity').val();
	var description = $('#description').val();
	var date = $("#tododay").val();
	var starttime = $('#selectHourStart').val() + ":" + $('#selectMinStart').val() +" "+ $('#selectAMPMStart').val();
	var endtime = $('#selectHourEnd').val() + ":" + $('#selectMinEnd').val() +" "+ $('#selectAMPMEnd').val();
	
	// Fetch the existing items
	items = getItems();
	
	// Push the new item into the existing list
	items[id] = {
		title: title,
		description: description,
		date: date,
		starttime: starttime,
		endtime: endtime
	};
	
	// Store the new list
	saveItems(items);
}

// This function removes and activity from the array
function remove()
{
	// Find the requested id
	var id = window.location.href.split('?')[1];
	
	// Fetch the existing items
	items = getItems();
	
	// Remove the item from the list
	items.splice(id, 1);
	
	// Store the new list
	saveItems(items);
}

// This function loads the activitys to be displayed, base on what date is chosen
function homepage()
{
	var date = localStorage.getItem('date');
		
	// Fetch the existing items
	items = getItems();
		
	// Clear the list
	$('#items').find('li').remove();
	
	// Add every item to the items list
	for(var index = 0; index < items.length; index++)
	{
	if(date == items[index].date){
		
		element = $('<li><a class="toggle" data-id="' + index + '" href="#"><h2>' + items[index].title + '</h2></a><a href="view.html?' + index + '"></li>');
		
		// check to see it the item had been togled
		if (items[index].done)
		{
			element.css('opacity', .5);
		}
		
		$('#items').append(element);
	}
	}
		
	
	// Let jQuery re-render our list
	$('#items').listview('refresh');
}

// This function gets the items and populate the page with their values
function view(id)
{
	// Fetch all the items
	items = getItems();
	
	// Find the requested item
	item = items[id];
		
	// Populate the page
	$('#activity1').val(item.title);
	$('#description1').val(item.description);
	$('#tododay1').val(item.date);
	$('#start1').val(item.starttime);
	$('#end1').val(item.endtime);
}

// this function sets the toggle for the activitys
function toggle(id)
{
	// Fetch all the items
	items = getItems();
	
	// Find the requested item
	item = items[id];
	
	// Toggle the status
	item.done = (item.done) ? false : true;
	
	// Write back to the item list
	items[id] = item;
	
	// Write back to the storage
	saveItems(items);
	
	// Reload the page
	window.location.reload();
}

// Listen for events
$(document).on('pagebeforeshow', '#todo', function(event)
{
	var date = localStorage.getItem('date');;
	$('#tododay').val(date);
	homepage();
});

$(document).on('pagebeforeshow', '#login', function(event)
{
	getLogin();
	var date = new Date().toJSON().slice(0,10)
	localStorage.setItem('date', date);
});

$(document).on('pagebeforeshow', '#viewempty', function(event)
{
	act = getAct();
	var date = localStorage.getItem('date');
	$('#tododay1').val(date);

	for(var i =0; i < act.length; i++ ){
		
		$('#activity').append('<option value="'+ act[i] +'">'+ act[i] +'</option>');
	}
		
	$("#activity").selectmenu('refresh', true);	
});

$(document).on('pagebeforeshow', '#view', function(event)
{
	// Retrieve the requested id from the URL
	id = window.location.href.split('?')[1];
	
	// Load the requrested item
	view(id);
});

$(document).on('click', '#edit', function()
{
	display();
});

$(document).on('click', '#edit2', function()
{
	var date = $('#tododay1').val();
	localStorage.setItem('date', date);
	add();
});

$(document).on('click', '#loginbtn', function()
{
	login = getLogin();
		
	var username = $("#uname").val();
	var passwrd = $("#upassword").val();
	
	if ((username == "") || (passwrd == "")){
		$( "#spacePopup" ).popup( "open");
	}
	
	for(var i=0;i<login.length;i++){
	
		if((login[i].username == username) && (login[i].passwrd == passwrd) ){
				
			window.location.href="todo.html";
		}
			
		else{
				$( "#noAccPopup" ).popup( "open");
		}
	}
});

$(document).on('click', '#createbtn', function()
{	
	var username = $("#uname1").val();
	var passwrd = $("#upassword1").val();
	
	if ((username == "") || (passwrd == "")){
		$( "#space1Popup" ).popup( "open");
	}
	
	else{
		addUser();
		window.location.href="todo.html";
	}
});

$(document).on('click', '#remove', function()
{
	remove();
	window.location.href="todo.html";
});

$(document).on('click', '.toggle', function()
{
	id = $(this).data('id');
	
	toggle(id);
});

$(document).on('click', '#gobtn', function()
{
	var date = $('#tododay').val();
	localStorage.setItem('date', date);
	homepage();
});

$(document).on('click', '#addActBtn', function()
{
	addActivity();
});