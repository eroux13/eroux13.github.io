// Script to handle mailto function on contact page
// Change methond on HTML form to 'GET'
var form = document.querySelector("form");
form.addEventListener("submit", contact, false);
function contact(event) {
    event.preventDefault();

    var target = event.target || event.srcElement;
    var message = "";

    for (var i = 0; i < target.length; ++i) {
        if (target[i].type != "text" && target[i].type != "textarea" && target[i].type != "email") {
            continue;
        }
        message += target[i].name + ": " + target[i].value + "\r\n";
    }
    target.elements["body"].value = message;

    this.submit();
}