import React from 'react';
import { FooterContainer, WebsiteRights, SocialIcons, SocialIconLink } from './Footer.elements';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';


const Footer = () => {
    return (
        <FooterContainer>
            <WebsiteRights> Created by MDJ </WebsiteRights>
            <SocialIcons>
                <SocialIconLink href={"https://www.instagram.com/mdj.codes/"} target="_blank" aria-label="Instagram">
                    <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href={"https://www.linkedin.com/in/joshua-cleveland/"} target="_blank" aria-label="LinkedIn">
                    <FaLinkedin />
                </SocialIconLink>
                <SocialIconLink href={"https://github.com/jclevecodes"} target="_blank" aria-label="GitHub">
                    <FaGithub />
                </SocialIconLink>
            </SocialIcons>
        </FooterContainer>
    )
}

export default Footer