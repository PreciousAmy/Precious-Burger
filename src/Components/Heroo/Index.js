import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroEle'
import video from "../../Videos/burgerl.mp4"
import { Button } from '../buttonElement'
import { useState } from 'react'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }


  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={video} type='video/mp4'  />
        </HeroBg>
        <HeroContent>
            <HeroH1>
               Fresh, Fast and Delicious Burger!!
            </HeroH1>
            <HeroP>
                Blink-Burger
            </HeroP>
            <HeroBtnWrapper>
                <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} 
                primary="true"
                dark="true"
                >
                    Order Now {hover ? <ArrowForward /> : <ArrowRight />}
                </Button>
            </HeroBtnWrapper>
        </HeroContent>
      
    </HeroContainer>
  )
}

export default HeroSection
