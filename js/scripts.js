/*!
* Start Bootstrap - Stylish Portfolio v6.0.6 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/
window.addEventListener('DOMContentLoaded', event => {

    const sidebarWrapper = document.getElementById('sidebar-wrapper');
    let scrollToTopVisible = false;
    // Closes the sidebar menu
    const menuToggle = document.body.querySelector('.menu-toggle');
    menuToggle.addEventListener('click', event => {
        event.preventDefault();
        sidebarWrapper.classList.toggle('active');
        _toggleMenuIcon();
        menuToggle.classList.toggle('active');
    })

    // Closes responsive menu when a scroll trigger link is clicked
    var scrollTriggerList = [].slice.call(document.querySelectorAll('#sidebar-wrapper .js-scroll-trigger'));
    scrollTriggerList.map(scrollTrigger => {
        scrollTrigger.addEventListener('click', () => { 
            sidebarWrapper.classList.remove('active');
            menuToggle.classList.remove('active');
            _toggleMenuIcon();
        })
    });

    function _toggleMenuIcon() {
        const menuToggleBars = document.body.querySelector('.menu-toggle > .fa-bars');
        const menuToggleTimes = document.body.querySelector('.menu-toggle > .fa-xmark');
        if (menuToggleBars) {
            menuToggleBars.classList.remove('fa-bars');
            menuToggleBars.classList.add('fa-xmark');
        }
        if (menuToggleTimes) {
            menuToggleTimes.classList.remove('fa-xmark');
            menuToggleTimes.classList.add('fa-bars');
        }
    }

    // Scroll to top button appear
    document.addEventListener('scroll', () => {
        const scrollToTop = document.body.querySelector('.scroll-to-top');
        if (document.documentElement.scrollTop > 100) {
            if (!scrollToTopVisible) {
                fadeIn(scrollToTop);
                scrollToTopVisible = true;
            }
        } else {
            if (scrollToTopVisible) {
                fadeOut(scrollToTop);
                scrollToTopVisible = false;
            }
        }
    })
})

function fadeOut(el) {
    el.style.opacity = 1;
    (function fade() {
        if ((el.style.opacity -= .1) < 0) {
            el.style.display = "none";
        } else {
            requestAnimationFrame(fade);
        }
    })();
};

function fadeIn(el, display) {
    el.style.opacity = 0;
    el.style.display = display || "block";
    (function fade() {
        var val = parseFloat(el.style.opacity);
        if (!((val += .1) > 1)) {
            el.style.opacity = val;
            requestAnimationFrame(fade);
        }
    })();
};

var timesFed = 0;

$("#animal-button").on("click", function(event) {
    $("#zoo-message").text("Looking for a random dog...");

    $.getJSON("https://dog.ceo/api/breeds/image/random", function(data) {
        $("#animal-name").text("Random dog");

        $("#animal-picture-box").html(
            "<img src='" + data.message + "' alt='A random dog' width='300'>"
        );

        $("#animal-fact").text("This dog just got added to the show.");

        $("#zoo-message").text("looks like we got a doggy in the house!");
    });
});

$("#color-button").on("click", function(event) {
    $("#zoo-message").text("New color loading...");

    $.getJSON("https://x-colors.yurace.pro/api/random", function(data) {
        $("#dog-show-box").css("background-color", data.hex);
        $("#zoo-message").text("The show color changed.");
    });
});

$("#feed-button").on("click", function(event) {
    timesFed = timesFed + 1;
    $("#zoo-message").text("Yum! you gave the dog  " + timesFed + " treats.");
});

$("#reset-button").on("click", function(event) {
    timesFed = 0;
    $("#animal-name").text("Mystery Dog");
    $("#animal-picture-box").text("Dog pic here.");
    $("#animal-fact").text("Dog fact here");
    $("#dog-show-box").css("background-color", "rgb(235, 245, 225)");
    $("#zoo-message").text("The puppies are ready to meet you!");
});