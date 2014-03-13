$("#hintbutton").click(function () {
    $(".hint").slideToggle("slow");
});


$("#settings").click(function () {
    $(".sliders").slideToggle("slow");
});

//TODO FIX SLIDER VALUE BUG
$(function () {
    $("#monthSlider").slider({
        range: true,
        min: 1,
        max: 12,
        values: [ 1, 12],
        slide: function (event, ui) {
            $("#monthAmount").val(ui.values[0] + ui.values[ 1 ]);
        }
    });
    $("#monthAmount").val($("#monthSlider").slider("values", 0) +
        " - " + $("#monthSlider").slider("values", 1));

});

$(function () {
    $("#yearSlider").slider({
        range: true,
        min: 1970,
        max: 2014,
        values: [ 1970, 2014],
        slide: function (event, ui) {
            $("#yearAmount").val(ui.values[0] + ui.values[ 1 ]);
        }
    });
    $("#yearAmount").val($("#yearSlider").slider("values", 0) +
        " - " + $("#yearSlider").slider("values", 1));
});



