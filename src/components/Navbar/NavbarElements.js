import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
margin-top:-80px;
background:#000;
height:80px;
justify-self:center;
display:flex;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;



@media screen and (max-width:960px){
    transition: 0.8 all ease;
}
`;
export const NavbarContainer = styled.div`
display:flex;
justify-content: space-between;
height:80px;

width:100%;
padding:0 24px;

`;
export const NavLogo = styled(LinkR)`
color:white;
justify-self:flex-start;
cursor:pointer;
font-size:1.5rem;
display:flex;
align-items:center;
margin-right:10px;
font-weight:bold;
text-decoration:none;
`;


export const MobileIcon = styled.div`

display:none;
@media screen and (max-width:900px){
display:block;
position:absolute;
top:0;
right:0;
transform:translate(-100%,60%);
font-size:1.8rem;
cursor:pointer;
color:#fff

}

`

export const NavMenu = styled.ul`

display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-left:25px;
@media screen and (max-width: 900px){

    display:none;
}
`

export const NavItem = styled.li`
height:80px;

`
export const NavLinks = styled(LinkS)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100% ;
cursor:pointer;

&.active{
    border-bottom :3px solid #01bf71
}
`

export const NavBtn = styled.nav`

display:flex;
align-items:center;
@media screen and (max-width:900px){
 display:none;    
}

`


export const NavBtnLink = styled(LinkR)`
border-radius:50px;
background:#01bf71;
white-space: space nowrap;
padding:10px 22px;
color:#010606;
font-size:16px;
outline:none;
border:none;
cursor:pointer;
transition:all 0.2 ease-in-out;
text-decoration:none;

&:hover{
transition:all 0.2s ease-in-out;
background:#fff;
color:#010606;

}
`
