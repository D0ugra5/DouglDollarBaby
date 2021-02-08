import React from 'react'
import { FaBars } from 'react-icons/fa'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
    return (
        <>
            <Nav>

                <NavbarContainer>
                    <NavLogo to='/'>  DougDollarBaby </NavLogo>


                    <MobileIcon onClick={toggle}>
                        <FaBars />


                    </MobileIcon >

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about">Sobre nós</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">Descubra</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services">Serviços</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup">Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">
                            Sign In
                     </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar
