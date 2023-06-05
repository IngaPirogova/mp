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
/* margin-top: auto; */
/* margin-bottom: 88px; */
font-family: 'Inter';
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 1.29;
text-decoration-line: underline;
color: #FFFFFF;
text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
`;


// Description

export const StyledImg = styled.div`
    display: flex;
   flex-direction: column;
   `
  
export const StyledList = styled.ul`
list-style: none;
padding: 0px;
margin: 0px;
`

export const StyledItem = styled.li`
margin-bottom: 64px;


@media screen and (min-width: 768px) {
  ${({ additionalClass }) =>
    additionalClass &&
    `
    flex-direction: row-reverse;      
    `}
}

@media screen and (min-width: 1440px) {
display: flex;
gap: 228px;
justify-content: center;
align-items: center;

${({ additionalClass }) =>
    additionalClass &&
    `
    flex-direction: row-reverse;      
    `}
}
`

export const WrapItemText = styled.div`

@media screen and (min-width: 768px) {
  ${({ additionalClass }) =>
    additionalClass &&
    `
    margin-left: 430px;      
    `}
}
 
@media screen and (min-width: 1440px) {
flex-direction: column;
margin-left: 0px; 

}
`

export const StyledNumberTitle = styled.h2`
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 80px;
color: #3E85F3;
margin: 0px;
padding: 0px;

@media screen and (min-width: 768px) {
   width: 74px;
   height: 104px;
   font-size: 104px;
}
`
export const StyledBtnDescr = styled.button`
   width:214px;
   height: 56px;
   padding: 8px 18px;
   border: none;
   background: #DCEBF7;
   border-radius: 44px;  
   margin-top: 14px;
   margin-bottom: 8px;
   
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.25;
  text-transform: uppercase;
  color: #3E85F3;

@media screen and (min-width: 768px) {
  width: 264px;
  padding: 6px 18px;
  font-size: 40px;
  line-height: 1.1;  
}
`

export const StyledSubtitle = styled.h3`
padding: 0px;
margin: 0px;
font-family: 'Inter';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 1.25;
text-transform: uppercase;
color: #171820;

@media screen and (min-width: 768px) {
 
font-size: 40px;
line-height: 1.1;
}
@media screen and (min-width: 768px) {
  ${({ additionalClass }) =>
    additionalClass &&
    `
      margin-top: 14px;
    `}

}

`
export const StyledText = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 1.29;
color: rgba(17, 17, 17, 0.9);
margin-top: 14px;
margin-bottom: 40px;

@media screen and (min-width: 768px) {
  margin-top: 24px;
  margin-bottom: 48px;
   }

   @media screen and (min-width: 768px) {
    width: 275px;    
   }
`

export const StyledPictureDescr = styled.picture`
   width: 335px;
   flex-grow: 0;

   @media screen and (min-width: 768px) {
     width: 704px;
   }

   @media screen and (min-width: 1440px) {
     width: 604px;
   }
 `; 

 
 


 //Slider

 export const SliderTitle = styled.h3`
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.14;
  text-transform: uppercase;
  color: #3E85F3;
  
  @media screen and (min-width: 768px) {
    
font-size: 40px;
line-height: 1.1;
   }
`;

export const StyledSlider = styled.section`
   /* height: 100vh;  */
  display: flex;
  flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: #FFFFFF;   
   margin-bottom: 64px;  
   `

export const SliderList = styled.ul`
display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  list-style: none;   
`
export const SliderItem = styled.li``