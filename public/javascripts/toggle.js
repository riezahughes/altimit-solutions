function toggle() {
  if(trackToggle % 2){
  var cancelSound = document.getElementById("audio-cancel");
  cancelSound.play();

  }else{
  var confirmSound = document.getElementById("audio-confirm");
  confirmSound.play();
  }
  trackToggle++;
  var element = document.getElementById("form-input");
  element.classList.toggle("visible");
  var particle = document.getElementById("particles-js");
  particle.classList.toggle("lighten");
  var button = document.getElementById("login-buttons");
  button.classList.toggle("roll");
  var container = document.getElementById("control-buttons");
  container.classList.toggle("bigger");
};
function whiteout(){
  function removeDisc(){
    document.getElementById("blackout").style.display = "none";
    document.getElementById("audio-title").play();
  }
  function makeTransparent(){
    document.getElementById("whiteout").style.backgroundColor = "transparent";
  }
  function rem(){
    document.getElementById("whiteout").style.display = "none";
  }
setTimeout(removeDisc, 1);
setTimeout(makeTransparent, 1000);
setTimeout(rem, 3000);

};

window.onload=function(){
var form = document.getElementById('login-form');
var inputs = document.querySelectorAll('input');
var required_inputs = document.querySelectorAll('input[required]');
var register = document.getElementById('connect-button');
var selectSound = document.getElementById("audio-select");

form.addEventListener('keyup', function(e) {
    var disabled = false
    required_inputs.forEach(function(input, index) {
        if (input.value === '' || !input.value.replace(/\s/g, '').length) {
            disabled = true
        }
    })
    if (disabled) {
        register.setAttribute('disabled', 'disabled')
        register.classList.add('disabled');

    } else {
        register.removeAttribute('disabled')
        register.classList.remove('disabled');
    }
})
};
