import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const Wrapper = styled.div`
  margin: 0 auto;
  padding-inline: 20px;

  @media screen and (min-width: 768px) {
    padding-inline: 32px;
   }

   @media screen and (min-width: 1440px) {
    padding-inline: 128px;
   }
  `

export const StyledHeader = styled.section`
   height: 100vh; 
  display: flex;
  flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #3E85F3;    
   margin-bottom: 64px;  
   padding-top: 140px;     
   
   @media screen and (min-width: 768px) {
    padding-top: 0px;   
   }
   `

 export const StyledTitle = styled.h1`
  margin: 0;
  margin-bottom: 32px;
  font-family: 'Coolvetica';
  font-size: 44px;
  line-height: 1.09;
  font-weight: 400;
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07),
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
  color: #ffffff;

  @media screen and (min-width: 768px) {
     font-size: 120px;
     line-height: 1.25;
     margin-bottom: 40px;
   }
 `; 


 export const StyledPicture = styled.picture`
   width: 142px;

   @media screen and (min-width: 768px) {
      width: 150px; 
   }
 `; 

export const StyledImgAuthNav = styled.div`
     display: flex;
     align-items: center;
     justify-content:center;
   
   @media screen and (min-width: 768px) {
    flex-direction: row-reverse;    
   }   
 `; 


export const AuthBtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
   gap: 200px; 

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    gap: 24px;    
  }
`

export const StyledAuthButton = styled(NavLink)`
 width: 131px;
 height: 46px;
 color: #3E85F3;
 font-family: 'Inter';
 font-style: normal;
 font-weight: 600;
 font-size: 14px;
 line-height: 1.29;
 text-decoration: none;
 letter-spacing: -0.02em;
 background: #FFFFFF;
 box-shadow: 4px 2px 16px rgba(136, 165, 191, 0.48);
 border-radius: 16px;
 border: none; 
 display: flex;
align-items: center;
justify-content: center;
`
  
export const StyledAuthSpan = styled.img`
width: 13.5px;
height: 13.5px;
margin-left: 8px;
`

export const StyledLink = styled(NavLink)`
color:#FFFFFF;
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 1.29;
text-decoration-line: underline;
color: #FFFFFF;
text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;
