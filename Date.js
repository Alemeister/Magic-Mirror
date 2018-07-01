var weekdays = ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"];
var months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];

function getDate() {
	var d = new Date();
	
	var day = d.getDay();
	var year = d.getFullYear();
	var month = d.getMonth();
	var date = d.getDate();

	var text_date = "<h2>" + weekdays[day] + "<br>" + date + " " + months[month] + " " + year + "</h2>";
	
	document.getElementById("date").innerHTML = text_date;
}

//Calls getDate() immediately at start
getDate();

//Uppdates date once a minute
setInterval(getDate(), 60000);