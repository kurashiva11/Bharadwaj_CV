import { useEffect, useState } from "react";
import $ from "jquery";

import About from "./screens/about";
import Experience from "./screens/experience";
import Education from './screens/education';

import './pageScroll.css';
import usePrevious from "./hooks/usePrevious";

// can add upto 10 screens if require to add more screens then add nth-child css at public/index.css file.
const routes = [
  {
    path: "/",
    Screen: About,
  },
  {
    path: "/experience",
    Screen: Experience,
  },
  {
    path: '/education',
    Screen: Education,
  },
];

function App() {
  const [currentSlideNumber, setCurrentSlideNumber] = useState<number>(0);
  const prevSlideNumber = usePrevious(currentSlideNumber);

  useEffect(() => {
    // For Screen Animations
    var ticking = false;
    const isFirefox = /Firefox/i.test(navigator.userAgent);
    const isIe =
        /MSIE/i.test(navigator.userAgent) ||
        /Trident.*rv\:11\./i.test(navigator.userAgent);
    const scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
    const slideDurationSetting = 600; //Amount of time for which slide is "locked"
    const totalSlideNumber = $(".screen").length;

    // ------------- DETERMINE DELTA/SCROLL DIRECTION ------------- //
    function parallaxScroll(evt: any) {
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
              setCurrentSlideNumber(prev => prev < totalSlideNumber - 1 ? prev+1 : prev);
              slideDurationTimeout(slideDurationSetting);
          }
          if (delta >= scrollSensitivitySetting) {
              //Up scroll
              ticking = true;
              setCurrentSlideNumber(prev => prev > 0 ? prev-1 : prev);
              slideDurationTimeout(slideDurationSetting);
          }
        }
    }

    // ------------- SET TIMEOUT TO TEMPORARILY "LOCK" SLIDES ------------- //
    function slideDurationTimeout(slideDuration: number) {
        setTimeout(function () {
          ticking = false;
        }, slideDuration);
    }

    // ------------- ADD EVENT LISTENER ------------- //
    const mousewheelEvent = isFirefox ? "DOMMouseScroll" : "wheel";
    window.addEventListener(mousewheelEvent, parallaxScroll, false);
  }, []);

  useEffect(() => {
    // move pages up and down by adding the classes on the respective pages.
    if (currentSlideNumber === prevSlideNumber+1) {
      const previousSlide = $(".screen").eq(currentSlideNumber - 1);
      previousSlide.removeClass("up-scroll").addClass("down-scroll");
    } else if (currentSlideNumber === prevSlideNumber-1) {
      const currentSlide = $(".screen").eq(currentSlideNumber);
      currentSlide.removeClass("down-scroll").addClass("up-scroll");
    }
  }, [currentSlideNumber]);

  return (
    <div className="App">
      {routes.map((route, index) => (
        <route.Screen key={route.path} isActive={index === currentSlideNumber} />
      ))}
    </div>
  );
}

export default App;
