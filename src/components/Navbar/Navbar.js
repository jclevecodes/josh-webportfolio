import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import { Nav, NavbarContainer, Logo, NavIcon, NavMenu, NavItem, NavLinks, MobileIcon, NavItemBtn } from "./NavbarElements";

const Navbar = ()=> {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <Logo to='/'>
                        <NavIcon />
                        JC
                    </Logo>
                    <MobileIcon onClick={ handleClick }>
                        { click ? <FaTimes /> : <FaBars /> }
                    </MobileIcon>
                    <NavMenu onClick={ handleClick } click={ click }>
                        <NavItem>
                            <NavLinks to='/'>
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/contactform'>
                                Contact Me
                            </NavLinks>
                        </NavItem>
                        <NavItemBtn>
                            
                        </NavItemBtn>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
} 

export default Navbar;