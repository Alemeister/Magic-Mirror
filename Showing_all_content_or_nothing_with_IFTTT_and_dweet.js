//"Show me nothing" = Only show the swedish time on the screen
//"Show me everything" = Show everything on the screen
//ID: alemeister_show_content
//http://dweet.io/get/latest/dweet/for/{alemeister_show_content}
//http://dweet.io/dweet/for/{alemeister_show_content}?alemeister_show_content=everything
//http://dweet.io/dweet/for/{alemeister_show_content}?alemeister_show_content=nothing

//ID for the content:
//chilean_clock_fieldset    
//lund_weather_fieldset  
//upper_right 
//bottom

setInterval(function () {
    function gettingJSON() {
        $.getJSON("http://dweet.io/get/latest/dweet/for/{alemeister_show_content}", function (json) {

            var answer = json.with[0].content.alemeister_show_content;

            if (answer == "nothing") {
                document.getElementById("chilean_clock_fieldset").style.display = "none";
                document.getElementById("lund_weather_fieldset").style.display = "none";
                document.getElementById("upper_right").style.display = "none";
                document.getElementById("bottom").style.display = "none";
            }

            if (answer == "everything") {
                document.getElementById("chilean_clock_fieldset").style.display = "block";
                document.getElementById("lund_weather_fieldset").style.display = "block";
                document.getElementById("upper_right").style.display = "block";
                document.getElementById("bottom").style.display = "block";
            }
        });
    }
    gettingJSON();
}, 1000);

