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
        max: 2014,
        values: [1970, 2014],
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


// Functions to generate random dates
today = new Date();

var year_min = 1970;
var year_max = today.getFullYear();
var random_year = Math.floor(Math.random() * (year_max - year_min + 1)) + year_min;

var month_min = 1;
var month_max = 12;
var random_month = Math.floor(Math.random() * (month_max - month_min + 1)) + month_min;

function max_days(month, year) {
    return new Date(year, month, 0).getDate();
}
var day_min = 1;
var day_max = max_days(random_month, random_year);
var random_day = Math.floor(Math.random() * (day_max - day_min + 1)) + day_min;

var random_date = new Date(random_year, random_month, random_day);
var weekday = random_date.getDay();


document.getElementById("topdate").innerHTML = random_day + '.' + random_month + '.' + random_year;