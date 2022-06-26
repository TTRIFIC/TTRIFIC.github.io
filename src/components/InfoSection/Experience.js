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
  Employer,
  Position,
  Description,
} from "./ExperienceElements";

const Experience = ({ lightBg, lightText, darkText }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id="experience">
        <InfoWrapper>
          <InfoRow>
            <Column1>
              <TopLine>Experience</TopLine>
              <TextWrapper>
                <Employer darkText={darkText}>Deloitte</Employer>
                <Position>Lead Insider Threat Analyst</Position>
                <Description darkText={darkText}>
                  I began working at Deloitte in August of 2020. Currently, I
                  work within Deloitte Global on the Global Insider Threat Team.
                  I have thoroughly enjoyed my time working here as I am a part
                  of a large, international, team with a plethora of skill sets.
                  Since working here, I have been introduced to the world of
                  insider threat, learned how to identify malicious, and more
                  innocent, non-compliant user behavior, taken on critical
                  stakeholder management roles, organized and delivered
                  important briefings, automated monthly metrics reports with
                  PowerBI, trained new team members in our UBA environment, and
                  conducted hundreds of hours of in-depth analysis from various
                  data sources such as DLP and CASB solutions. On top of all of
                  that, I was awarded an Outstanding Performance Award in
                  October 2021 and I was promoted from a Senior Analyst to a
                  Lead Analyst in December 2021.
                </Description>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <Employer lightText={lightText}>
                  Federal Reserve Bank of Chicago
                </Employer>
                <Position>Client Security Services Intern</Position>
                <Description>
                  My internship at the Federal Reserve Bank of Chicago was my
                  first internship that gave me the idea to start my career in
                  information security. My internship at the Federal Reserve was
                  from June 2019 to August 2019. During my time here, I worked
                  in the national IT department, specifically on the
                  Client/Endpoint Security Team. My team's scope was to perform
                  various QA/QT tests on different security suites used
                  throughout the Federal Reserve network, and then deploy said
                  suites onto their defined Client/Endpoint devices. This role
                  taught me it's important to pay attention to detail, missing
                  one important item could have caused a large vulnerability for
                  the entire Federal Reserve network. I also got to network with
                  a ton of talented professionals who I am still in-contact with
                  today.
                </Description>
              </TextWrapper>
            </Column2>
            <Column3>
              <TextWrapper>
                <Employer darkText={darkText}>PayLink Direct</Employer>
                <Position>Technology Intern</Position>
                <Description darkText={darkText}>
                  PayLink Direct was the very first experience I had into the
                  corporate world. I worked here from June of 2018 to August of
                  2018. PayLink is a private financing firm that works with car
                  dealerships to provide the software needed to bill clients for
                  their cars warranty. No, they are not the ones who call you 3
                  times a day asking about your car's extended warranty, they
                  just produce the billing software. My job-function at PayLink
                  was split between the customer service department, and the IT
                  department. While working with the customer service team, I
                  was tasked with handling inbound calls from clients. This
                  usually involved handling secure payment processing for bills
                  or answering questions on general account information. My role
                  in the IT department was a bit more ad hoc. I assisted in
                  asset management, data center migration, and network diagram
                  design.
                </Description>
              </TextWrapper>
            </Column3>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Experience;
