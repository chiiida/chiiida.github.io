// $(document).ready(function() {
//     $(window).on("scroll",alterNav);
// });

// $(document).on('click', 'a[href^="#"]', function(e) {
//     // target element id
//     var id = $(this).attr('href');
//     console.log(id);

//     // target element
//     var $id = $(id);
//     if ($id.length === 0) {
//         return;
//     }

//     // prevent standard hash navigation (avoid blinking in IE)
//     e.preventDefault();

//     // top position relative to the document
//     var pos = $id.offset().top - 150;

//     // animated top scrolling
//     $('body, html').animate({scrollTop: pos});
// });

// function alterNav() {
//     var wn = $(window).scrollTop();
//     var navbar = document.querySelector(".navbar");
//     if (wn > 150) {
//         navbar.classList.add("scrolled");
//     } else {
//         navbar.classList.remove("scrolled");
//     }
// }

$('#topNavbar .navbar-nav a').on('click', function() {
    $( '#topNavbar .navbar-nav a' ).find( 'li.active' ).removeClass( 'active' );
    $( this ).parent( 'li' ).addClass( 'active' );
})