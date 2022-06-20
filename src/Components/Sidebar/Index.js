import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoutr } from './SidebarEle'


const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="services" onClick={toggle}>Services</SidebarLink>
                <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
                <SidebarLink to="request" onClick={toggle}>Request</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoutr to="signin">Sign In</SidebarRoutr>
            </SideBtnWrap>
        </SidebarWrapper>
      
    </SidebarContainer>
  )
}

export default Sidebar
