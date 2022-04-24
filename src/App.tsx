import { useEffect, useState, useRef } from "react";
import $ from "jquery";

import About from "./screens/about";
import Experience from "./screens/experience";
import Projects from './screens/projects';
import Skills from "./screens/skills";

import './pageScroll.css';
import usePrevious from "./hooks/usePrevious";
import Header from "./components/Header";

// can add upto 10 screens if require to add more screens then add nth-child css at public/index.css file.
const routes = [
  {
    path: '',
    hashURL: '#About',
    Screen: About,
  },
  {
    path: 'experience',
    hashURL: '#Experience',
    Screen: Experience,
  },
  {
    path: 'projects',
    hashURL: '#Projects',
    Screen: Projects,
  },
  {
    path: 'skills',
    hashURL: '#Skills',
    Screen: Skills,
  },
];

const isFirefox = /Firefox/i.test(navigator.userAgent);
const isIe =
  /MSIE/i.test(navigator.userAgent) ||
  /Trident.*rv\:11\./i.test(navigator.userAgent);
const scrollSensitivitySetting = 30; //Increase/decrease this number to change sensitivity to trackpad gestures (up = less sensitive; down = more sensitive)
const slideDurationSetting = 600; //Amount of time for which slide is "locked"

function App() {
  const [currentSlideNumber, setCurrentSlideNumber] = useState<number>(0);
  const prevSlideNumber = usePrevious(currentSlideNumber);
  const totalSlideNumber = useRef<number>(0);

  const moveUpByOnePage = () => {
    setCurrentSlideNumber(prev => prev > 0 ? prev - 1 : prev);
  }

  const moveDownByOnePage = () => {
    setCurrentSlideNumber(prev => prev + 1 < totalSlideNumber.current ? prev + 1 : prev);
  }

  const slidePageTo = (pagePath: string) => {
    const targetPageIndex = routes.findIndex((ele) => ele.path === pagePath);
    if (targetPageIndex === -1) return;
    const targetSlideNumber = targetPageIndex - currentSlideNumber;
    for (let i = 0; i < Math.abs(targetSlideNumber); i++) {
      setTimeout(targetSlideNumber > 0 ? moveDownByOnePage : moveUpByOnePage, 250 * (i + 1));
    }
  }

  useEffect(() => {
    // For Screen Animations
    var ticking = false;
    totalSlideNumber.current = $(".screen").length;

    const downScroll = () => {
      //Down scroll
      ticking = true;
      moveDownByOnePage();
      slideDurationTimeout(slideDurationSetting);
    }

    const upScroll = () => {
      //Up scroll
      ticking = true;
      moveUpByOnePage();
      slideDurationTimeout(slideDurationSetting);
    }

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
          downScroll();
        }
        if (delta >= scrollSensitivitySetting) {
          upScroll();
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
    window.document.body.addEventListener('swiped-up', downScroll);
    window.document.body.addEventListener('swiped-down', upScroll);

    // ------------- MOVE PAGE TO PATH IN THE URL ------------- //
    const loc = window.location.href.split('#');
    const pagePath = loc.length > 1 ? loc[1].toLowerCase() : 'about';
    slidePageTo(pagePath);
  }, []);

  useEffect(() => {
    // move pages up and down by adding the classes on the respective pages.
    if (currentSlideNumber === prevSlideNumber + 1) {
      const previousSlide = $(".screen").eq(currentSlideNumber - 1);
      previousSlide.removeClass("up-scroll").addClass("down-scroll");
    } else if (currentSlideNumber === prevSlideNumber - 1) {
      const currentSlide = $(".screen").eq(currentSlideNumber);
      currentSlide.removeClass("down-scroll").addClass("up-scroll");
    }

    // Add the hashLink to page url after slide.
    window.location.href = window.location.href.split('#')[0] + routes[currentSlideNumber].hashURL;
  }, [currentSlideNumber]);

  return (
    <div className="App">
      <Header currentScreen={routes[currentSlideNumber]} slidePageTo={slidePageTo}>
        {routes.map((route, index) => (
          <route.Screen key={route.path} isActive={index === currentSlideNumber} />
        ))}
      </Header>
    </div>
  );
}

export default App;
