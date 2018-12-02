function loading() {
  var logInSound = document.getElementById("audio-logging")
  logInSound.play();
  var loading = document.getElementById("loading-overlay");
  loading.classList.add("loading");
  var background = document.getElementById("login-container");
  background.classList.add("hide");
  var loadingSound = document.getElementById("audio-loading");
  //loadingSound.play();
  var particle = document.getElementById("particles-js");
  //particle.classList.toggle("lighten");
};
