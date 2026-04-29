import React from "react";
import AboutPic from "../../assets/images/boston_marathon_1.jpeg";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Subtitle,
  ImgWrap,
  Img,
} from "./AboutElements";

const InfoSection = () => {
  return (
    <>
      <InfoContainer id="about">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TextWrapper>
                <TopLine>About</TopLine>
                <Subtitle>
                  Hi, my name is Matthew Beckerman. I'm currently 24 years old
                  and work at Deloitte as a Lead Insider Threat Analyst and have
                  my CompTIA Security+ certification. Outside of work, my
                  hobbies include: Running (Chicago and Boston Marathon
                  Finisher), Formula 1, Photography, Motorcycles, Cars, and
                  Computers. You can find more information about my experience
                  at Deloitte, as well as previous work experiences, my
                  schooling, and what projects I'm currently working on down
                  below. Additionally, you can find all the links to my social
                  media accounts at the bottom of the page. I hope you enjoy my
                  website and if you would like to contact me, the button is
                  directly above this section :)
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={AboutPic} alt="Boston Marathon 2022"></Img>
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
