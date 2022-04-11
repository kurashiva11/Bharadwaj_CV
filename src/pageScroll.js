import $ from "jquery";

// For Screen Animations
$(function () {
  // ------------- VARIABLES ------------- //
    var ticking = false;
    var isFirefox = /Firefox/i.test(navigator.userAgent);
    var isIe =
        /MSIE/i.test(navigator.userAgent) ||
        /Trident.*rv\:11\./i.test(navigator.userAgent);
    var scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
    var slideDurationSetting = 600; //Amount of time for which slide is "locked"
    var currentSlideNumber = 0;
    var totalSlideNumber = $(".screen").length;

    // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
    function parallaxScroll(evt) {
        //Set delta for all other browsers
        let delta = evt.wheelDelta;
        if (isFirefox) {
        //Set delta for Firefox
        delta = evt.detail * -120;
        } else if (isIe) {
        //Set delta for IE
        delta = -evt.deltaY;
        }

        if (ticking !== true) {
        if (delta <= -scrollSensitivitySetting) {
            //Down scroll
            ticking = true;
            if (currentSlideNumber !== totalSlideNumber - 1) {
            currentSlideNumber++;
            nextItem();
            }
            slideDurationTimeout(slideDurationSetting);
        }
        if (delta >= scrollSensitivitySetting) {
            //Up scroll
            ticking = true;
            if (currentSlideNumber !== 0) {
            currentSlideNumber--;
            }
            previousItem();
            slideDurationTimeout(slideDurationSetting);
        }
        }
    }

    // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
    function slideDurationTimeout(slideDuration) {
        setTimeout(function () {
        ticking = false;
        }, slideDuration);
    }

    // ------------- ADD EVENT LISTENER ------------- //
    var mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
    window.addEventListener(mousewheelEvent, parallaxScroll, false);

    // ------------- SLIDE MOTION ------------- //
    function nextItem() {
        const previousSlide = $(".screen").eq(currentSlideNumber - 1);
        previousSlide.removeClass("up-scroll").addClass("down-scroll");
    }

    function previousItem() {
        const currentSlide = $(".screen").eq(currentSlideNumber);
        currentSlide.removeClass("down-scroll").addClass("up-scroll");
    }
});
