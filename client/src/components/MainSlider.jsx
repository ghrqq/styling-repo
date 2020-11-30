import React from "react";
import { useState } from "react";
import arrow from "../img/arrow-right.png";
import bgvideo from "../img/particlebg.mp4";
import useWindowDimensions from "../tools/useWindowDimensions";

import logo from "../img/logo.jpg";

export default function MainSlider(props) {
  const logo = props.logo;
  const imgArr = props.imgArr;
  const { height, width } = useWindowDimensions();
  const [slider, setslider] = useState(0);
  const [isLogoOn, setisLogoOn] = useState(false);

  const handleSlide = (val) => {
    setisLogoOn(true);
    setTimeout(() => {
      if (slider + val > imgArr.length - 1) {
        setslider(0);
        setisLogoOn(false);
      } else if (slider + val < 0) {
        setslider(imgArr.length - 1);
        setisLogoOn(false);
      } else {
        setslider(slider + val);
        setisLogoOn(false);
      }
    }, 250);
  };
  return (
    <div id="mainSlider">
      <video
        src={bgvideo}
        autoPlay="autoplay"
        loop="loop"
        muted
        style={{ overflow: "hidden" }}
      ></video>
      <div className="container">
        <div>
          <h4>Something classy.</h4>
        </div>
        <button className="sliderButton" onClick={() => handleSlide(-1)}>
          <img className="arrow-left arrow" src={arrow} />
        </button>
        {isLogoOn ? (
          <img src={logo} style={{ opacity: "0.5" }} />
        ) : (
          <img src={imgArr[slider]} />
        )}

        <button className="sliderButton" onClick={() => handleSlide(+1)}>
          <img className="arrow" src={arrow} />
        </button>
        <div>
          <h4>Something classy.</h4>
        </div>
      </div>
    </div>
  );
}
