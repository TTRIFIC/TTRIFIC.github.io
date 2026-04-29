import React from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsH2,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsP,
  ProjectLink,
} from "./ProjectsElements";
import Homepage from "../../assets/images/homepage.png";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectLink
          href="//github.com/TTRIFIC/TTRIFIC.github.io"
          target="_blank"
          aria-label="Website"
        >
          <ProjectsCard>
            <ProjectsIcon src={Homepage} />
            <ProjectsH2>This Website</ProjectsH2>
            <ProjectsP>
              Created using React, React Router, React Scroll, and Styled
              Components.
            </ProjectsP>
          </ProjectsCard>
        </ProjectLink>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
