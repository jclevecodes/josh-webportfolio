import React, { useEffect } from 'react';
import { Container } from '../../globalStyles';
import HeaderImg from '../images/josh.jpg';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { HeaderRow, HeaderColumn, TextWrapper, TopLine, Heading, ImgWrapper, Img, SocialIconLink, SocialIcons, SocialStarter, SubText, HeaderPicColumn } from './Header.elements';

const Header = ({ headerImg, top, headline, subtext }) => {

    useEffect(() => {
        window.scroll(0, 0)
    })

    return (
        <Container>
            <HeaderRow>
                <HeaderColumn>
                    <TextWrapper>
                        <TopLine>{top}</TopLine>
                        <Heading>{headline}</Heading>
                        <SubText>{subtext}</SubText>
                        <SocialIcons>
                            <SocialStarter>
                                ______________________
                            </SocialStarter>
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
                    </TextWrapper>
                </HeaderColumn>
                <HeaderPicColumn>
                    <ImgWrapper>
                        <Img src={HeaderImg}></Img>
                    </ImgWrapper>
                </HeaderPicColumn>
            </HeaderRow>
        </Container>
    )
}

export default Header
