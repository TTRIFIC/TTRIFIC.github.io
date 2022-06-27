import React, { useState } from "react";
import Video from "../../assets/videos/video.mp4";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  NavBtnLink,
} from "./HeroElements";

const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay playsInline loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Matthew Beckerman</HeroH1>
        <HeroP>
          Swipe down to read more about myself, my professional experience,
          education, and personal projects.
        </HeroP>
        <HeroBtnWrapper>
          <NavBtnLink
            to="contact"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Contact {hover ? <ArrowForward /> : <ArrowRight />}
          </NavBtnLink>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
