import React,{useState} from 'react'
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import Navbar from '../components/Navbar';
import Sidebar, {  } from "../components/Sidebar";
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    }
    return (
     <>
     <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
     <Navbar toggle={toggle}></Navbar>
     <HeroSection></HeroSection>
   
     </>
    )
}

export default Home
