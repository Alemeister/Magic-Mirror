//Uppdates clocks every second
setInterval(function() {
	var d = new Date();
	var hours = d.getHours();
	var minutes = d.getMinutes();
	
	//Adds "0" to single digit minutes and hours			
	var full_minutes = minutes > 9 ? minutes : '0' + minutes; 
	var full_swedish_hours = hours > 9 ? hours : '0' + hours; 
				
	if (hours > 3)
		var chilean_hours = (hours - 4);
	else
		var chilean_hours = (hours + 20);
	var full_chilean_hours = chilean_hours > 9 ? chilean_hours : '0' + chilean_hours; 				

	var swedish_time = "<h1>" + full_swedish_hours + ":" + full_minutes + "</h1>";
	var chilean_time = "<h1>" + full_chilean_hours + ":" + full_minutes + "</h1>";
				
	document.getElementById("swedish_clock").innerHTML = swedish_time;
	document.getElementById("chilean_clock").innerHTML = chilean_time;
}, 1000);