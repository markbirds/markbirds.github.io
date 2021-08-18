function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
  $.get('https://api.github.com/users/markbirds/repos?per_page=100',function(data){
    var projects = ["Code-Invaders","Deep-Learning-Projects","Flask-Chat-Rooms","Machine-Learning-Projects","Natural-Language-Processing-Projects","Youtube-Contents"];
    var project_name = ["Code Invaders","Deep Learning Projects","Flask Chat Rooms","Machine Learning Projects","Natural Language Processing Projects","Youtube Contents"];
    var tag_colors = ["primary","success","danger","warning","info","dark","secondary"]
    var counter = 0;
    var cards = "";
    for(var i=0;i<data.length;i++){
      if(projects.includes(data[i].name)){
        cards += ( counter === 0 || counter === 3 ) ? '<section>' : '';
        cards+=
        '<div class="card-project">'+
          '<div class="card-header">'+ 
            '<p>'+project_name[counter]+'</p>'+
            '<span class="badge-'+ tag_colors[Math.floor((Math.random() * 7))] +'">' + data[i].language + '</span>' + 
          '</div>'+
          '<div class="card-body">'+
            '<p class="description">' + data[i].description + '</p>' +
            '<div class="created">'+
              '<p><i> Created ' + jQuery.timeago(data[i].created_at)  + '</i></p>' +
            '</div>'+
            '</div>' +
        '</div>';
        cards += ( counter === 2 || counter === 5) ? '</section>' : '';
        counter++;
      }
    }
    $('.github-projects').html(cards);
  });
});

var prevScrollpos = window.pageYOffset;
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
  if($('.topnav.responsive').length===0){
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementsByTagName("nav")[0].style.top = "0px";
    } else {
      document.getElementsByTagName("nav")[0].style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  }
};

function fadeOut(){
  loader = $("#loader");
  main = $("main");
  setTimeout(function(){
    loader.fadeOut(1000);
  },3000);   
  setTimeout(function(){
    main.css("display", "block");
    $('nav').css("display", "block");
  },4000);  
} 

function dropLinks(x) {
  x.classList.toggle("change");
  let topnav = document.getElementById("myTopnav");
  if (topnav.className === "topnav") {
    topnav.className += " responsive";
  } else {
    topnav.className = "topnav";
  }
}