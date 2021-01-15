// Script to handle mailto function on contact page
// Change methond on HTML form to 'GET'
var form = document.querySelector("form");
form.addEventListener("submit", contact, false);
function contact(event) {
    // Prevent page from reloading after button click
    event.preventDefault();

    var target = event.target || event.srcElement;
    var message = "";

    // Loop through all inupt fields
    for (var i = 0; i < target.length; ++i) {
        if (target[i].type != "text" && target[i].type != "textarea" && target[i].type != "email") {
            continue;
        }
        // Add input name and value followed by a line break
        message += target[i].name + ": " + target[i].value + "\r\n";
    }
    target.elements["body"].value = message;

    this.submit();
}