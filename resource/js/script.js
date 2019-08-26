window.onscroll = () => { navChange() };

const me = document.getElementById('me')
const exp = document.getElementById('experiences')
const ach = document.getElementById('achievements')
const proj = document.getElementById('projects')
const cont = document.getElementById('contact')
var navEm = [
    document.getElementById('atme'),
    document.getElementById('exp'),
    document.getElementById('ach'),
    document.getElementById('proj'),
    document.getElementById('cont')
]

function navChange() {
    var wn = $(window).scrollTop();
    var navbar = document.querySelector('.navbar');
    if (wn > 200) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    var scrollPos = $(document).scrollTop();
    if (scrollPos < me.offsetTop) {
        addActive(navEm[0]);
    } else if (scrollPos < exp.offsetTop) {
        addActive(navEm[1]);
    } else if (scrollPos < ach.offsetTop) {
        addActive(navEm[2]);
    } else if (scrollPos < proj.offsetTop) {
        addActive(navEm[3]);
    } else if (scrollPos < cont.offsetTop) {
        addActive(navEm[4]);
    }
}

// Scrolling Nav
$(document).on('click', 'a[href^="#"]', function(e) {
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    var pos = $id.offset().top - 200;
    $('body, html').animate({scrollTop: pos});
});

function addActive(ele){
    for (var i = 0; i < navEm.length; i++) {
        if (navEm[i].id != ele.id) {
            navEm[i].parentNode.classList.remove( 'active' );
        } else if (navEm[i].id === ele.id) {
            ele.parentNode.classList.add( 'active' );
        }
    }
}

document.addEventListener('DOMContentLoaded',function(event){
    var dataText = ["Chananchida F. <br /><br />start developing"];
    function typeWriter(text, i, fnCallback) {
      if (i < (text.length)) {
       document.getElementById('header-text').innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';
  
        setTimeout(function() {
          typeWriter(text, i + 1, fnCallback)
        }, 100);
      }
      else if (typeof fnCallback == 'function') {
        setTimeout(fnCallback, 700);
      }
    }
     function StartTextAnimation(i) {
       if (typeof dataText[i] == 'undefined'){
          setTimeout(function() {
            StartTextAnimation(0);
          }, 20000);
       }
      if (i < dataText[i].length) {
       typeWriter(dataText[i], 0, function(){
         StartTextAnimation(i + 1);
       });
      }
    }
    StartTextAnimation(0);
  });