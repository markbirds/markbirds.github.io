function responseNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

function drop_menu(x) {
    x.classList.toggle("change");
    responseNav();
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
  $.get('https://api.github.com/users/markbirds/repos',function(data){
    var projects = ["C-Phone","Password-Manager","Resistor-Color-Coding","Used-Car-Price-Prediction","PHP-Login-Signup","Django-Code-Repo"];
    var project_name = ["C++ Phone","Django Code Repo","Password Manager","PHP Login-Signup","Resistor Color Coding","Used Car Price Prediction"];
    var tag_colors = ["primary","success","danger","warning","info","dark","secondary"]
    var counter = 0;
    var cards = "";
    for(var i=0;i<data.length;i++){
      if(projects.includes(data[i].name)){
        cards+=
        '<div class="card-project">'+
          '<div class="card-header"><h5><a href="'+data[i].html_url+'" target="_blank">'+ project_name[counter] +'</a></h5></div>'+
          '<div class="card-body">'+
          '<p>' + data[i].description + '</p>' +
          '<p>Created ' + jQuery.timeago(data[i].created_at)  + '</p>' +
          '<p style="margin-top:5px;">Tags: <span class="badge badge-'+ tag_colors[Math.floor((Math.random() * 7))] +'">' + data[i].language + '</span></p>' + 
          '</div>' +
        '</div>';
        counter++;
      }
    }
    $('#projects').html(cards);
  });
});

// When the user scrolls the page, execute myFunction 
window.onscroll = function() {scroll()};

function scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

var i = 0;
var txt = "Hi I'm Owen";
var speed = 150;

function typeWriter() {
    if (i < txt.length) {
    document.getElementById("type").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }else{
      typeWriter2();
    }

}

var i2 = 0;
var txt2 = "Welcome to my website!";
var speed2 = 150;

function typeWriter2() {
  if (i2 < txt2.length) {
  document.getElementById("type2").innerHTML += txt2.charAt(i2);
  i2++;
  setTimeout(typeWriter, speed2);
  }
}