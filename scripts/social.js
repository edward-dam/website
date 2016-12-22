// Author: Ed Dam

function openSocial(evt, socialName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("ed-social");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("ed-tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-indigo", "");
  }
  document.getElementById(socialName).style.display = "block";
  evt.currentTarget.className += " w3-indigo";
}
