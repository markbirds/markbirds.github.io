function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(document).ready(function(){
  $.get('https://api.github.com/users/markbirds/repos?per_page=100',function(data){
    var projects = ["Anime-Recommendation-System","Django-Chat-Rooms","Mobile-Price-Classification","PHP-Login-Signup","Spam-Email-Classification","Used-Car-Price-Prediction"];
    var project_name = ["Anime Recommendation System","Django Chat Rooms","Mobile Price Classification","PHP Login-Signup","Spam Email Classification","Used Car Price Prediction"];
    var tag_colors = ["primary","success","danger","warning","info","dark","secondary"]
    var counter = 0;
    var cards = "";
    for(var i=0;i<data.length;i++){
      if(projects.includes(data[i].name)){
        cards+=
        '<div class="card-project">'+
          '<div class="card-header">'+ 
            '<p>'+project_name[counter]+'</p>'+
            '<span class="badge-'+ tag_colors[Math.floor((Math.random() * 7))] +'">' + data[i].language + '</span>' + 
          '</div>'+
          '<div class="card-body">'+
            '<p class="description">' + data[i].description + '</p>' +
            '<div class="source-code">'+
              '<p><a href="'+ data[i].html_url +'" target="_blank">Click here for source code.</a></p>' +
            '</div>'+
            '<div class="created">'+
              '<p><i> Created ' + jQuery.timeago(data[i].created_at)  + '</i></p>' +
            '</div>'+
            '</div>' +
        '</div>';
        counter++;
      }
    }
    $('.github-projects').html(cards);
  });
});

var prevScrollpos = window.pageYOffset;
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {
  scroll();
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("myTopnav").style.top = "0px";
  } else {
    document.getElementById("myTopnav").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

function fadeOut(){
  loader = $("#loader");
  main = $("main");
  setTimeout(function(){
    loader.fadeOut(1000);
  },3000);   
  setTimeout(function(){
    main.css("display", "block");
  },4000);  
} 

