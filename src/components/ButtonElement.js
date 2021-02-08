import styled from "styled-components";
import { Link } from "react-scroll";
export const Button = styled(Link)`
border-radius:50px;
background:${({primary}) =>(primary ? '#01bf71':'#010606')};
white-space:nowrap;
padding:${({big})=>(big ? '14px 48px ': '12px 30px')};
color:${({dark})=>(dark ? '#010606':'black')};
font-size:${({fontBig})=>(fontBig ? '2px':'16px')};
outline:none;
border:none;
cursor: pointer;
display:flex;
justify-content:center;
align-items:center;
transition: all 0.2 ease-in-out;
height:50px;


&:hover{
  transition: all 0.2 ease-in-out;
  background:${({primary}) =>(primary ? '#fff':'#01bf71')};

}
`