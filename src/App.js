import React, { useEffect, useRef } from 'react';
import { isBrowser, isMobile } from "react-device-detect";
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import AOS from 'aos'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import HomePage from './pages/HomePage';
import MobileHomePage from './pages/MobileHomePage';

gsap.registerPlugin(ScrollTrigger);

function App() {

  const ref = useRef(null);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 700,
      easing: 'ease-out-cubic',
    });

    const element = ref.current;

  });


  const renderContent = () => {
    console.log("isBrowser", isBrowser, isMobile)
    if (isBrowser) {
      return <HomePage />
    }
    if (isMobile) {
      return <MobileHomePage />
    }
  }

  return (
    <div ref={ref}>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            {renderContent}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
