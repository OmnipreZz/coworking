document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {
        draggable: true
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth: true,
        // indicators: true,
        duration: 400
    });
});


$('.carousel').carousel();
setInterval(function () {
    $('.carousel').carousel('next');
}, 5000);


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {
        respponsivThreshold: 0
    });
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