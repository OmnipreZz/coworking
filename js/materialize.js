
// Option menu navbar mobile
//---------------------
$(document).ready(function () {
    $('.sidenav').sidenav();
});

//---------------------



// Carousel
//---------------------

$('.carou').carousel({
    duration: 400,
    fullWidth: true
});
setInterval(function () {
    $('.carou').carousel('next');
}, 5000);

$('.carousel-icon').carousel({
    duration: 800,
    fullWidth: true
});
setInterval(function () {
    $('.carousel-icon').carousel('next');
}, 6000);

//---------------------



// Parallax
//---------------------
$(document).ready(function () {
    $('.parallax').parallax();
});


//enable collapsible in the options cards
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {inDuration: 300});
  });



// ------------------------
// [Test Page] Modal

$(document).ready(function(){
    $('.modal').modal();
  });

//---------------------
