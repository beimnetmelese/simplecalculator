var valueArray = [];
var values = "";
var values1 = "";
var arrayValue = [];
var result;
$("button").click(function () {
    var pressedElement = this;
    var valu = $(pressedElement).html();
    pressed(pressedElement);
    sound();
    input(pressedElement);
    var output = calculator(pressedElement);
    $("#output").html(output);
});

function pressed(pressedElement) {
    $(pressedElement).addClass("pressed");
    setTimeout(function () {
        $(pressedElement).removeClass("pressed");
    }, 100);
}

function sound() {
    var audio = new Audio("click.mp3");
    audio.play();
}

function calculator(pressedElement) {
    var value = $(pressedElement).html();
    if (value == "Ac") {
        result = 0;
        values1 = ""; 
    }
    else if (value == "Del") {
        values1 = values1.slice(0,(values1.length - 1));
        result = eval(values1);
    }
    else {
        values1 = values1 + value;
        result = eval(values1);
    }
    return result;

}
function input(pressedElement) {
    var value = $(pressedElement).html();
    if (value == "Ac") {
        values = "";
        $("#input").text(values);
    }
    else if (value == "Del") {
        values = values.slice(0,(values.length - 2));
        $("#input").text(values);
    }
    else if (value != "=") {
        values = values + value + " ";
        $("#input").text(values);
    }
}