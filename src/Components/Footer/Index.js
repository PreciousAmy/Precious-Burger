import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FooterContainer, FooterWrapper, FooterLinksContainer,FooterLinksWrapper, FooterLinkItem, FooterLinkTitle, FooterLink,
        SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRight
} from './FooterEle'

const Footer = () => {

    const toggleTop = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrapper>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItem >
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/">Privacy Policy</FooterLink>
                            <FooterLink to="/">Terms and Services</FooterLink>
                            <FooterLink to="/">Food Quality</FooterLink>
                            <FooterLink to="/">Reviews</FooterLink>
                        
                    </FooterLinkItem>
                    <FooterLinkItem>
                        <FooterLinkTitle> Socials </FooterLinkTitle>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Twitter</FooterLink>
                        
                    </FooterLinkItem>
                    <FooterLinkItem>
                        <FooterLinkTitle> Business </FooterLinkTitle>
                            <FooterLink to="/">Sponsorship</FooterLink>
                            <FooterLink to="/">Support</FooterLink>
                            <FooterLink to="/">Destination</FooterLink>
                            <FooterLink to="/"> Contact</FooterLink>

                        
                    </FooterLinkItem>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            
        </FooterWrapper>
        <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to="/" onClick={toggleTop}>
                        Blink-Burger

                    </SocialLogo>
                    <WebsiteRight> Blink-Burger <span>&#169;</span> {new Date().getFullYear()} All rights Reserved.</WebsiteRight>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
      
    </FooterContainer>
  )
}

export default Footer

