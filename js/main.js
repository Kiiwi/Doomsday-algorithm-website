// Functions to show hidden content
$("#hintbutton").click(function () {
    $(".hint").slideToggle("slow");
});

$("#settings").click(function () {
    $(".sliders").slideToggle("slow");
});


// Functions that handles sliders
$(function () {
    $("#yearSlider").slider({
        range: true,
        min: 1970,
        max: 2015, //TODO set this to be current year
        values: [1970, 2015],
        slide: function (event, ui) {
            $("#yearAmount").val(ui.values[0] + " - " + ui.values[ 1 ]);
        }
    });
    $("#yearAmount").val($("#yearSlider").slider("values", 0) +
        " - " + $("#yearSlider").slider("values", 1));
});

$(function () {
    $("#monthSlider").slider({
        range: true,
        min: 1,
        max: 12,
        values: [1, 12],
        slide: function (event, ui) {
            $("#monthAmount").val(ui.values[0] + " - " + ui.values[ 1 ]);
        }
    });
    $("#monthAmount").val($("#monthSlider").slider("values", 0) +
        " - " + $("#monthSlider").slider("values", 1));

});


// Functions that handle modal dialogs
$("#centmodalbutton").click(function () {
    $("#centmodal").dialog("open");
    $(".ui-dialog-titlebar").hide();
    $('#centmodal').css('height', 'auto');
});

$("#centmodal").dialog({
    width: 600,
    modal: true,
    show: true,
    hide: true,
    autoOpen: false,
    open: function () {
        jQuery('.ui-widget-overlay').bind('click', function () {
            jQuery('#centmodal').dialog('close');
        })
    }
});

$("#yearmodalbutton").click(function () {
    $("#yearmodal").dialog("open");
    $(".ui-dialog-titlebar").hide();
    $('#yearmodal').css('height', 'auto');
});

$("#yearmodal").dialog({
    width: 600,
    modal: true,
    show: true,
    hide: true,
    autoOpen: false,
    open: function () {
        jQuery('.ui-widget-overlay').bind('click', function () {
            jQuery('#yearmodal').dialog('close');
        })
    }
});


$("#datemodalbutton").click(function () {
    $("#datemodal").dialog("open");
    $(".ui-dialog-titlebar").hide();
    $('#datemodal').css('height', 'auto');
});

$("#datemodal").dialog({
    width: 600,
    modal: true,
    show: true,
    hide: true,
    autoOpen: false,
    open: function () {
        jQuery('.ui-widget-overlay').bind('click', function () {
            jQuery('#datemodal').dialog('close');
        })
    }
});


// Functions to load algorithms from their own file
$(function () {
    $("#yearmodal").load("year_algorithm.html");
});

$(function () {
    $("#centmodal").load("century_algorithm.html");
});

$(function () {
    $("#datemodal").load("date_algorithm.html");
});


// Weekday array
var weekday_array = [];
weekday_array[0] = "Monday";
weekday_array[1] = "Tuesday";
weekday_array[2] = "Wednesday";
weekday_array[3] = "Thursday";
weekday_array[4] = "Friday";
weekday_array[5] = "Saturday";
weekday_array[6] = "Sunday";
weekday_array[7] = "Monday";
weekday_array[8] = "Tuesday";

// Anchor date dictionary
var anchor = {1: "3/4", 2: "7/1", 3: "21", 4: "4", 5: "9", 6: "6", 7: "11", 8: "8", 9: "5", 10: "10", 11: "7", 12: "12"};

// Functions to generate random dates

var weekday;
function new_date() {
    var year_range = $('#yearSlider').slider("option", "values");
    var year_min = year_range[0];
    var year_max = year_range[1];
    var random_year = Math.floor(Math.random() * (year_max - year_min + 1)) + year_min;

    var month_range = $('#monthSlider').slider("option", "values");
    var month_min = month_range[0];
    var month_max = month_range[1];
    var random_month = Math.floor(Math.random() * (month_max - month_min + 1)) + month_min;

    function max_days(month, year) {
        return new Date(year, month, 0).getDate();
    }

    var day_min = 1;
    var day_max = max_days(random_month, random_year);
    var random_day = Math.floor(Math.random() * (day_max - day_min + 1)) + day_min;

    var random_date = new Date();
    random_date.setFullYear(random_year, random_month - 1, random_day);
    weekday = random_date.getDay();

    function doomsday_year(year) {
        var year_str = year.toString();
        var year_T_str = year_str.slice(2);
        var year_T = parseInt(year_T_str);
        if (year_T % 2 != 0) {
            year_T += 11;
        }
        year_T /= 2;
        if (year_T % 2 != 0) {
            year_T += 11;
        }
        return 7 - (year_T % 7);
    }

    // Doomsday offset wed/tues for 19xx/20xx
    var dd = doomsday_year(random_year);
    if (random_year < 2000) {
        dd += 2;
    }
    else {
        dd += 1;
    }

// Display
    document.getElementById("topdate").innerHTML = random_day + '.' + random_month + '.' + random_year;
    document.getElementById("yearmodalspan").innerHTML = weekday_array[dd];
    if (random_year < 2000) {
        document.getElementById("centmodalspan").innerHTML = "Wednesday";
    }
    else {
        document.getElementById("centmodalspan").innerHTML = "Tuesday";
    }
    document.getElementById("datemodalspan").innerHTML = anchor[random_month];
    return weekday;

}


// Check if correct answer
function buttonClicked() {
    var value = (this === window) ? 'window' : this.value;
    var name = this.id;
    var correct_button = weekday_array[weekday + 1];
    var correct_delay = 1000;
    var incorrect_delay = 1500; //ms
    if (value == weekday) {
        this.style.background = "#15AB28";
        this.style.color = "#F2F5E9";
        setTimeout(function () {
            document.getElementById(name).style.background = "#364656";
            document.getElementById(name).style.color = "#9E9E9E";
            new_date();
        }, correct_delay);
    }
    else {
        this.style.background = "#C31B07";
        this.style.color = "#F2F5E9";
        document.getElementById(correct_button).style.background = "#15AB28";
        document.getElementById(correct_button).style.color = "#F2F5E9";
        setTimeout(function () {
            document.getElementById(name).style.background = "#364656";
            document.getElementById(name).style.color = "#9E9E9E";
            document.getElementById(correct_button).style.background = "#364656";
            document.getElementById(correct_button).style.color = "#9E9E9E";
            new_date();
        }, incorrect_delay);
    }
}

var button1 = document.getElementById('Monday');
var button2 = document.getElementById('Tuesday');
var button3 = document.getElementById('Wednesday');
var button4 = document.getElementById('Thursday');
var button5 = document.getElementById('Friday');
var button6 = document.getElementById('Saturday');
var button7 = document.getElementById('Sunday');

button1.onclick = buttonClicked;
button2.onclick = buttonClicked;
button3.onclick = buttonClicked;
button4.onclick = buttonClicked;
button5.onclick = buttonClicked;
button6.onclick = buttonClicked;
button7.onclick = buttonClicked;

// Initiate dates
window.onload = new_date;