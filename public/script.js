console.log("hello")

const c = "Hello";
const textarea = document.getElementsByTagName('textarea'),
attachInput = document.getElementById('attachment'),
msg = "Did you mean to attach a file to this message?",
sendButtons = document.getElementsByClassName('send');
console.log(textarea, attachInput, msg, sendButtons);

for (var i = 0; i < sendButtons.length; i++) {
  sendButtons[i].addEventListener('click', function() {
var hasAttachment = (attachInput.value.length > 0);
var body = textarea.body.value;
var saysAttach = (body.toLowerCase().indexOf('attach') !== -1);
if (saysAttach && !hasAttachment) {
  alert(msg);
}
});
}
