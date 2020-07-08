// var controller = new ScrollMagic.Controller();

// $(function () {
//     var scene = new ScrollMagic.Scene({triggerElement: ".sidebar"})
//                 .setPin("#sidebar-menu", {pushFollowers: false})
//                 .addIndicators({name: "this is the pin"})
//                 .addTo(controller);
// });

// $.ajaxSetup({
//   cache: true
// });

// function initializeMobileGallery() {
//     $("#projects-dest").append('<div class="swiper-container"></div>');
//     $(".swiper-container").append('<div class="swiper-wrapper">').append('<div class="swiper-pagination"></div>').append('<div class="swiper-button-prev"></div>').append('<div class="swiper-button-next"></div>').append('<div class="swiper-scrollbar"></div>');
//     $(".project-entry img").each(function () {
//         $(".swiper-wrapper").append('<div class="swiper-slide"></div>');
//         $(".swiper-slide").append(this).append('<div class="caption">ExplainExplaoinExplain</div>');
//     });
//
//     mySwiper = new Swiper ('.swiper-container', {
//         loop: false,
//         direction: 'vertical',
//         pagination: '.swiper-pagination',
//         nextButton: '.swiper-button-next',
//         prevButton: '.swiper-button-prev',
//         scrollbar: '.swiper-scrollbar',
//         slidesPerView: 1,
//         autoHeight: true,
//         centeredSlides: true
//     });
// }

// $(function () {
//     if (window.matchMedia("(max-width: 780px)").matches) {
//         $(".gallery-entry.active").toggleClass("active inactive");
//
//         $(".gallery-entry").each(function () {
//             var curr_id = this["id"];
//             var pattern = /\d/g;
//             var match = pattern.exec(curr_id);
//             var curr_idx = match[0];
//             var curr_link = "project"+curr_idx;
//             $(this).wrap('<a href="'+curr_link+'.html" ></a>');
//         })
//     //     $("head").append('<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/css/swiper.css">');
//     //     $.getScript("https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.4.2/js/swiper.jquery.js", function(data, status, jqxhr) {
//     //         cache: true;
//     //         // console.log(status);
//     //         initializeMobileGallery();
//     //     });
//
//     var didScroll;
//     var lastScrollTop = 0;
//     var delta = 5;
//     var navbarHeight = $('.sidebar').outerHeight();
//
//     $(window).scroll(function(event){
//         didScroll = true;
//     });
//
//     setInterval(function() {
//         if (didScroll) {
//             hasScrolled();
//             didScroll = false;
//         }
//     }, 250);
//
//     function hasScrolled() {
//         var st = $(this).scrollTop();
//
//         // Make sure they scroll more than delta
//         if(Math.abs(lastScrollTop - st) <= delta)
//             return;
//
//         // If they scrolled down and are past the navbar, add class .nav-up.
//         // This is necessary so you never see what is "behind" the navbar.
//         if (st > lastScrollTop && st > navbarHeight){
//             // Scroll Down
//             $('.sidebar').removeClass('nav-down').addClass('nav-up');
//         } else {
//             // Scroll Up
//             if(st + $(window).height() < $(document).height()) {
//                 $('.sidebar').removeClass('nav-up').addClass('nav-down');
//             }
//         }
//
//         lastScrollTop = st;
//     }
//
//     }
//
//     $(".project-entry.inactive").css({display: "none"});
//
//     $("#sidebar-top-menu").stick_in_parent();

//     $(".gallery-entry").click(function () {
//         var curr_gal_entry = this;
//         if ( $(this).hasClass("active") ) {
//             return;
//         };
//
//         // $("#project-expanded").css("border-color") == "rgb(227, 8, 0)" ?  $("#project-expanded").css({"border-color": "#3e0909"}) : $("#project-expanded").css({"border-color": "#e30800"});
//
//
//         var active_entry = $(".project-entry.active");
//         var active_gal = $(".gallery-entry.active");
//         // console.log(active_entry);
//
//         var curr_id = curr_gal_entry["id"];
//         var pattern = /\d/g;
//         var match = pattern.exec(curr_id);
//         var curr_idx = match[0];
//
//         var entry_to_toggle_id = "#entry-"+curr_idx;
//         var entry_to_toggle = $(entry_to_toggle_id);
//
//         active_entry.toggleClass("active inactive");
//         active_entry.fadeOut();
//         active_gal.toggleClass("active inactive");
//
//         entry_to_toggle.toggleClass("active inactive").delay(500).fadeIn();
//         $(curr_gal_entry).toggleClass("active inactive");
//
//     });
//
//     // $('#project-expanded').slick({
//     //     // slidesToShow: 1,
//     //     arrows: false,
//     //     // centerMode: true,
//     //     // centerPadding: '1%',
//     //     // fade: true,
//     //     vertical: true,
//     //     infinite: false,
//     //     asNavFor: '#project-gallery'
//     // // });
//
//     // $('#project-gallery').slick({
//     //     slidesToShow: 2,
//     //     slidesToScroll: 1,
//     //     // asNavFor: '#project-expanded',
//     //     vertical: true,
//     //     adaptiveHeight: true,
//     //     focusOnSelect: true,
//     //     infinite: false,
//     //     variableWidth: false,
//     //     centerMode: true,
//     //     centerPadding: '1%',
//     //     arrows: true
//     // })
//
//     // Hide Header on on scroll down
//
// });


let menuBar, stickyAt;
function setStickyHeader() {
        if (window.pageYOffset > (stickyAt + 10)) {
            menuBar.classList.add("sticky");
        } else {
            menuBar.classList.remove("sticky");
        }
}

function setupTitleTyped() {
    Typed.new('#header-info', {
        strings: ["Developer. ^500 Gamer. ^500 Enthusiast."],
        typeSpeed: 20,
        cursorChar: ''
    });
}

function setupStickyMenu() {
    /* Sticky menu bar only on desktop */
    if (window.matchMedia("(min-width: 780px)").matches) {
        menuBar = document.getElementById('sidebar-top-menu')
        stickyAt = menuBar.offsetTop;
    }
    window.onscroll = function () {
        setStickyHeader()
    };
}

function scrollToListenerFactory(linkId, destinationId) {
    document.getElementById(linkId).addEventListener('click', e => {
        e.preventDefault()
        document.getElementById(destinationId).scrollIntoView({behavior: "smooth"})
        document.getElementById(destinationId).focus({preventScroll: true})
    })
}

function setupScrollToLinks() {
    const scrollableLinks = new Map([
      ['about-link', 'about-dest'],
        ['projects-link', 'projects-dest'],
        ['contact-link', 'contact-dest']
    ]);
    for (const [linkId, destId] of scrollableLinks) {
        scrollToListenerFactory(linkId, destId)
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setupTitleTyped()
    setupStickyMenu()
    setupScrollToLinks()
});
