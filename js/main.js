$("#hintbutton").click(function () {
    $(".hint").slideToggle("slow");
});


$("#settings").click(function () {
    $(".sliders").slideToggle("slow");
});


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

$("#centmodalbutton").click(function () {
    $("#centmodal").dialog("open");
    $(".ui-dialog-titlebar").hide();
    $('#centmodal').css('height', 'auto');
});

$("#centmodal").dialog({
    width: 500,
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
    width: 500,
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
    width: 500,
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

// TODO: Fix auto size on modal dialogs