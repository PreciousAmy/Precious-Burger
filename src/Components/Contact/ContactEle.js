import styled from "styled-components";

export const ContactContainer = styled.div`
   height: 800px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background: #618a3d;

   @media screen and (max-width:768px) {
       height: 1100px;

       
   }

   @media screen and (max-width:768px) {
       height: 1300px;

       
   }
`

export const ContactWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 15px;
  padding: 0 50px;

  @media screen and (max-width:1000px) {
       grid-template-columns: 1fr 1fr;

       
   }

   @media screen and (max-width:768px) {
       grid-template-columns: 1fr;
       padding: 0 20px;

       
   }
`

export const ContactCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 12px;
  max-height: 380px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover{
      transform: scale(1.04);
      transition: all 0.3s ease-in-out;
      
  }
`

export const ContactIcon = styled.img`
   height: 170px;
   width: 180px;
   margin-bottom: 10px;
`

export const ContactH1 = styled.h1`
   font-size: 2.5rem;
   color: #fff;
   margin-bottom: 64px;

   @media screen and (max-width: 400px) {
       font-size: 1.8rem;
       
   }
`

export const ContactH2 = styled.h2`
   font-size: 1rem;
   margin-bottom: 10px;
`

export const ContactP = styled.p`
  font-size: 1rem;
  text-align: center;
`