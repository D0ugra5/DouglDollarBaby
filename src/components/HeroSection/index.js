import React, {useState} from "react";

import Video from "../../videos/video.mp4";
import {Button} from "../ButtonElement";
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroBtnWrapper,
    HeroH1,
    HeroP,
    ArrowRight,
    ArrowForward
} from "./HeroElements";


export const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = ()=>{

        setHover(!hover)
    }
    return (
        <>
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
           
            <HeroContent>
                <HeroH1>
                    DougDollarBaby, o Maior banco digital
                   </HeroH1>
                <HeroP>
                    Doe Alimentos e receba Serviços da Comunidade
                           </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup' onMouseEnter={onHover}
                    onMouseLeave={onHover}
                    primary="true"
                    darl='true'
                    
                    
                    >
                        Vamos-lá!   {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
            </HeroContainer>
        </>
    )
}

export default HeroSection