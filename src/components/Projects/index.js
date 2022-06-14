import React from "react";
import {
  ProjectsContainer,
  ProjectsH1,
  ProjectsH2,
  ProjectsWrapper,
  ProjectsCard,
  ProjectsIcon,
  ProjectsP,
} from "./ProjectsElements";
import Icon1 from "../../images/react-logo.png";

const Projects = () => {
  return (
    <ProjectsContainer id="projects">
      <ProjectsH1>Projects</ProjectsH1>
      <ProjectsWrapper>
        <ProjectsCard>
          <ProjectsIcon src={Icon1} />
          <ProjectsH2>This Website</ProjectsH2>
          <ProjectsP>
            Created using React, React Router, React Scroll, and Styled
            Components.
          </ProjectsP>
        </ProjectsCard>
      </ProjectsWrapper>
    </ProjectsContainer>
  );
};

export default Projects;
