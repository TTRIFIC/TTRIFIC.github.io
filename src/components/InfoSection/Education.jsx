import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  Column3,
  TextWrapper,
  TopLine,
  Establishment,
  Date,
  Description,
} from "./EducationElements";

const Education = () => {
  return (
    <>
      <InfoContainer id="education">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TopLine>Education</TopLine>
              <TextWrapper>
                <Establishment>
                  University of Illinois at Urbana-Champaign
                </Establishment>
                <Date>May 2020</Date>
                <Description>
                  College. When applying for admission at UIUC, I initally
                  applied for Computer Science. To my surprise (not) I did not
                  get in, however I was admitted for "Undecided". My freshman
                  year was spent packing my course-load in an attempt to
                  transfer into the College of Engineering as a CS major. After
                  taking Calculus II, Physics, and Chemistry all in the same
                  semester, I realized that was not what I wanted to do. I then
                  decided to pursue business, specifically Information Systems.
                  I got to learn useful skills such as Database Administration
                  with MySQL, IT Governance, Information Security Management,
                  Software Development Life Cycles, Accounting,
                  Entrepreneurship, Consulting, Economics, and Statistics.
                  Outside of the classroom I was President of Flashpoint
                  Photography Club, Webmaster of the Illinois Track & Field
                  Club, and Photography Chair of Psi Upsilon fraternity. I
                  recieved a Bachelors of Science in Information Systems and
                  Information Technology in May of 2020 and graduated with
                  honors.
                </Description>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <Establishment>CompTIA Security+</Establishment>
                <Date>September 2020</Date>
                <Description>
                  My first professional certification. After graduating college,
                  I knew I had to prove myself in the InfoSec world. I had taken
                  an InfoSec class my senior year and my professor had
                  structured the class very similarly to the contents of this
                  exam. I committed myself to studying and taking practice exams
                  for about a month straight before attempting the exam. I
                  managed to pass with a score of 738/800. The contents covered
                  in this exam are: Threats & Vulnerabilities, Technologies &
                  Tools, Architecture & Design, Identity and Access Management,
                  Risk Management, and Cryptography & PKI. After obtaining this
                  certification, I hope to earn more throughout my career, such
                  as CISSP. I also hope to learn more technical skill sets, such
                  as coding in Javascript and Python.
                </Description>
              </TextWrapper>
            </Column2>
            <Column3>
              <TextWrapper>
                <Establishment>Wheaton North High School</Establishment>
                <Date>May 2016</Date>
                <Description>
                  Home of the Wheaton North Falcons. My time in high school was
                  enjoyable, I ran on the cross country and track team all 4
                  years, made the honor roll every semester, joined the National
                  Honor Society, joined Mu Alpha Theta (the math honor society),
                  completed AP Psychology and AP Calculus BC, and tutored
                  younger students in math. During my time here, I also took an
                  intro level computer programming class which introduced me to
                  coding in Java. I graduated in May of 2016 on the blue honor
                  roll.
                </Description>
              </TextWrapper>
            </Column3>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Education;
