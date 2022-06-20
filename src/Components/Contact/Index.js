import React from 'react'
import beta from '../../Images/fastf.png'
import beau from '../../Images/foodjunk.png'
import ramp from '../../Images/banner.png'
import { ContactContainer, ContactH1, ContactWrapper, ContactCard, ContactIcon, ContactH2, ContactP } from './ContactEle'

const Contact = () => {
  return (
    <ContactContainer id="contact">
        <ContactH1>
            Contact Us
        </ContactH1>
        <ContactWrapper>
            <ContactCard>
                <ContactIcon  src={beta} />
                <ContactH2>
                    Head Office

                </ContactH2>
                <ContactP> No 30 Maitama avenue,Abuja</ContactP>
            </ContactCard>
            <ContactCard>
                <ContactIcon  src={beau} />
                <ContactH2>
                    Lagos Island Branch

                </ContactH2>
                <ContactP> No 30 Fola Osibo, lekki phase 1</ContactP>
            </ContactCard>
            <ContactCard>
                <ContactIcon  src={ramp} />
                <ContactH2>
                    Lagos Mainland Branch

                </ContactH2>
                <ContactP> No 30 Airport Road Ikeja</ContactP>
            </ContactCard>
        </ContactWrapper>

      
    </ContactContainer>
  )
}

export default Contact
