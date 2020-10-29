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
  tablinks = document.querySelectorAll(".skills-education .tab div");
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
    var projects = ["C-Phone","Password-Manager","Resistor-Color-Coding","Used-Car-Price-Prediction","PHP-Login-Signup","Django-Code-Repo","Flask-Chat-Rooms","Python-Chat-App"];
    var project_name = ["C++ Phone","Django Code Repo","Flask Chat Rooms","Password Manager","PHP Login-Signup","Python Chat App","Resistor Color Coding","Used Car Price Prediction"];
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
          '<p style="margin-top: 10px;"><strong>Source Code: </strong><a href="'+ data[i].html_url +'" target="_blank">'+ data[i].html_url +'</a></p>' +
          '<p><i>Created ' + jQuery.timeago(data[i].created_at)  + '</i></p>' +
          '</div>' +
          '<p class="tags">Tags: <span class="badge-'+ tag_colors[Math.floor((Math.random() * 7))] +'">' + data[i].language + '</span></p>' + 
        '</div>';
        counter++;
      }
    }
    $('#projects').html(cards);
  });
});

var prevScrollpos = window.pageYOffset;
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
  scroll();
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myTopnav").style.top = "8px";
  } else {
    document.getElementById("myTopnav").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};

function scroll() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function fadeOut(){
  loader = $("#loader");
  main = $("#main");
  setTimeout(function(){
    loader.fadeOut(1000);
  },3000);   
  setTimeout(function(){
    main.css("display", "block");
    typeWriter();
  },4000);  

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
  setTimeout(typeWriter2, speed2);
  }
}

