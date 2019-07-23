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
    console.log('1:'+scrollPos, proj.offsetTop)
    console.log('2:'+scrollPos, cont.offsetTop)
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

// $('#navbarResponsive .navbar-nav a').on('click', function() {
//     document.querySelector( 'li.active' ).classList.remove( 'active' );
//     $( this ).parent( 'li' ).addClass( 'active' );
// })

function addActive(ele){
    for (var i = 0; i < navEm.length; i++) {
        if (navEm[i].id != ele.id) {
            navEm[i].parentNode.classList.remove( 'active' );
        } else if (navEm[i].id === ele.id) {
            ele.parentNode.classList.add( 'active' );
        }
    }
}