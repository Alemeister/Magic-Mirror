//Sends request to openWeatherMap.Org and gets a json reply with weather data
//Parse and extracts interesting weather data
//Requires an API key that is obtained through the website
function getWeather() {
 	function gettingJSON(){
      		$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=Lund&APPID=28e55abfebeca2ec9580b0aa4a976d1c",function(json){
			

			var html = [];
       			html.push('<div>');
	      			html.push(json.name, ' ');

				//Temperature in Lund
				html.push((json.main.temp - 273.15).toFixed(1), '&#176C');
	
				//Sunrise in lund - Unicode: &#9728&#8679
				var sunriseTime = new Date(json.sys.sunrise*1000);
				//Adds "0" to single digit minutes and hours
				var full_minutes_sunrise = sunriseTime.getMinutes() > 9 ? sunriseTime.getMinutes(): '0' + sunriseTime.getMinutes();
				var full_hours_sunrise = sunriseTime.getHours() > 9 ? sunriseTime.getHours(): '0' + sunriseTime.getHours();
				html.push('<br>&#9728&#8679 ', full_hours_sunrise, ':', full_minutes_sunrise);
				
				//Sunset in lund - Unicode: &#9728&#8681
				var sunsetTime = new Date(json.sys.sunset*1000);
				var full_minutes_sunset = sunsetTime.getMinutes() > 9 ? sunsetTime.getMinutes(): '0' + sunsetTime.getMinutes(); 
				var full_hours_sunset = sunsetTime .getHours() > 9 ? sunsetTime .getHours(): '0' + sunsetTime .getHours();
				html.push('<br>&#9728&#8681 ', full_hours_sunset, ':', full_minutes_sunset);

        		html.push('</div>');
			document.getElementById("lund_weather").innerHTML = html.join('');

			var html_icon = [];
			html_icon.push('<div>');
				var icon = ("<img src='http://openweathermap.org/img/w/" + json.weather[0].icon + ".png'>");				
				html_icon.push(icon);
			html_icon.push('</div>');
			document.getElementById("weather_icon").innerHTML = html_icon.join('');
        	});
   	}
	gettingJSON();
}

//Calls getWeather() immediately at start
getWeather();

//Updates weather every 10 minute
setInterval(getWeather(), 600000);

//Weather API ID: 28e55abfebeca2ec9580b0aa4a976d1c
//OpenWeather Url: http://api.openweathermap.org/data/2.5/forecast
//Unicode: sun:&#9728 arrowUp:&#8679 arrowDown:&#8681