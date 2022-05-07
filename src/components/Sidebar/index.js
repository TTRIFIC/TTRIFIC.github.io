import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="experience" onClick={toggle}>Experience</SidebarLink>
                <SidebarLink to="education" onClick={toggle}>Education</SidebarLink>
                <SidebarLink to="projects" onClick={toggle}>Projects</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/contact">
                    Contact
                </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
};

export default Sidebar;