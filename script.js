$("#currentDay").text(moment().format("dddd, MMMM Do"));
let time = moment().format("HH");


$(".container").on("click", "button", function () {
    let buttonIdNum = $(this).attr("id").substring(3);
    let currentTextArea = `textArea${buttonIdNum}`;
    let currentTextAreaValue = $("#" + currentTextArea).val().trim();
    localStorage.setItem(currentTextArea, currentTextAreaValue);
})

function onLoad() {
    for (let i = 1; i < 13; i++) {
        let currentTextArea = "textArea" + i;
        let currentTextAreaValue = localStorage.getItem(currentTextArea) || "";
        $("#textArea" + i).val(currentTextAreaValue);
    }
    setColor();
}
setInterval(function () {
    time = moment().format("H");
    setColor()
}, 1000)

function setColor() {
    for (let i = 1; i < 13; i++) {
        if (time < i + 8) {
            $("#textArea" + i).css({ "background-color": "green", "opacity": "75%" });
        }
        if (time === i + 8) {
            $("#textArea" + i).css({ "background-color": "red", "opacity": "75%" });
        }
        if (time > i + 8) {
            $("#textArea" + i).css({ "background-color": "grey", "opacity": "75%" });
        }
    }
}
onLoad();