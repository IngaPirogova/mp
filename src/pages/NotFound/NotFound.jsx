//  const NotFound = () => {
//     return (
//       <main style={{ textAlign: "center" }}>
//         <b style={{ fontSize: 64 }}>404</b>
//         <p>Sorry, we couldn't find that page :( </p>
//       </main>
//     );
//   };
import goose1x from '../../imagesMainPage/img/mobile/goose1x.png';
import goose2x from '../../imagesMainPage/img/mobile/goose2x.png';
import goosetablet1x from '../../imagesMainPage/img/tablet/goosetablet1x.png';
import goosetablet2x from '../../imagesMainPage/img/tablet/goosetablet2x.png';
import goosedesk1x from '../../imagesMainPage/img/desktop/goosedesk1x.png';
import goosedesk2x from '../../imagesMainPage/img/desktop/goosedesk2x.png';
 
import {  
    
    StyledHeader, 
    StyledTitle, 
    StyledAuthButton,  
    StyledAuthSpan, 
    StyledPicture, 
    StyledImgAuthNav,
    AuthBtnWrapper,   
    TitleWrapper,
    Span,
    StyledTitleSec,
  } from './NotFound.styled';
  
  import login from '../../imagesMainPage/svg/login.svg';

const NotFound = () => {
    return ( 
        <StyledHeader>
        <StyledPicture>
        <source
          media="(min-width: 375px)"
          srcSet={`${goose1x} 1x, ${goose2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${goosetablet1x} 1x, ${goosetablet2x} 2x`}
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${goosedesk1x} 1x, ${goosedesk2x} 2x`}
        />      
       <StyledImgAuthNav>
       <img src={goose2x} alt="Logo goose, page Not Found" />
       </StyledImgAuthNav>
        </StyledPicture>
        <TitleWrapper>
            <StyledTitle><Span>Oo</Span>ps...</StyledTitle>
            <StyledTitleSec>page not found</StyledTitleSec>            
            </TitleWrapper>
            <AuthBtnWrapper>          
            <StyledAuthButton  to="/">Go back 
            <StyledAuthSpan src={login} alt="Login" />
            </StyledAuthButton>
                  
            </AuthBtnWrapper>
        </StyledHeader>
   
     )
}   

export default NotFound;