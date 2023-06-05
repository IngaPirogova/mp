
import goose1x from '../../imagesMainPage/img/mobile/goose1x.png';
import goose2x from '../../imagesMainPage/img/mobile/goose2x.png';
import goosetablet1x from '../../imagesMainPage/img/tablet/goosetablet1x.png';
import goosetablet2x from '../../imagesMainPage/img/tablet/goosetablet2x.png';
import goosedesk1x from '../../imagesMainPage/img/desktop/goosedesk1x.png';
import goosedesk2x from '../../imagesMainPage/img/desktop/goosedesk2x.png';
 
import calendar1x  from '../../imagesMainPage/img/mobile/calendar1x.png';
import calendar2x  from '../../imagesMainPage/img/mobile/calendar2x.png';
import calendartablet1x from '../../imagesMainPage/img/tablet/calendartablet1x.png';
import calendartablet2x from '../../imagesMainPage/img/tablet/calendartablet2x.png';
import calendardesk1x from '../../imagesMainPage/img/desktop/calendardesk1x.png';
import calendardesk2x from '../../imagesMainPage/img/desktop/calendardesk2x.png';

import sidebar1x from '../../imagesMainPage/img/mobile/sidebar1x.png';
import sidebar2x from '../../imagesMainPage/img/mobile/sidebar2x.png';
import sidebartablet1x from '../../imagesMainPage/img/tablet/sidebartablet1x.png';
import sidebartablet2x from '../../imagesMainPage/img/tablet/sidebartablet2x.png';
import sidebardesk1x from '../../imagesMainPage/img/desktop/sidebardesk1x.png';
import sidebardesk2x from '../../imagesMainPage/img/desktop/sidebardesk2x.png';

import one1x from '../../imagesMainPage/img/mobile/one1x.png';
import one2x from '../../imagesMainPage/img/mobile/one2x.png';
import onetablet1x from '../../imagesMainPage/img/tablet/onetablet1x.png';
import onetablet2x from '../../imagesMainPage/img/tablet/onetablet2x.png';
import onedesk1x from '../../imagesMainPage/img/desktop/onedesk1x.png';
import onedesk2x from '../../imagesMainPage/img/desktop/onedesk2x.png';


import {  StyledText, 
  StyledSubtitle, 
  StyledItem,
  StyledBtnDescr, 
  StyledNumberTitle, 
  StyledList,   
  StyledLink, 
  StyledHeader, 
  StyledTitle, 
  StyledAuthButton,  
  StyledAuthSpan, 
  StyledPicture, 
  StyledImg, 
  StyledPictureDescr,
  Wrapper,
  SliderTitle, 
  StyledSlider,
  SliderList,
  SliderItem,
  StyledImgAuthNav,
  AuthBtnWrapper,
  WrapItemText,
  SliderHeaderUser,
  SliderUserPhoto,
  HeaderUserWrapper,
  SliderUserTitle,
  SliderUserRating,
  SliderUserDescr, 
} from './MainPage.styled';

import login from '../../imagesMainPage/svg/login.svg';
import Olena from '../../imagesMainPage/img/mobile/Olena1x.png';
import Olex from '../../imagesMainPage/img/desktop/Olexdesk1x.png';
import { ReactComponent as Star } from '../../imagesMainPage/svg/star.svg';



 const MainPage = () => {
    return (     
    <>
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
       <img src={goose2x} alt="Logo goose" />
       </StyledImgAuthNav>
        </StyledPicture>
            <StyledTitle>GooseTrack</StyledTitle>
            <AuthBtnWrapper>          
            <StyledAuthButton  to="login">Log in 
            <StyledAuthSpan src={login} alt="Login" />
            </StyledAuthButton>
            <StyledLink to="register">Sign up</StyledLink>            
            </AuthBtnWrapper>
        </StyledHeader>
   
<Wrapper>
  <StyledList>
  <StyledItem>
    <WrapItemText>
    <StyledNumberTitle>1.</StyledNumberTitle>
    <StyledBtnDescr>Calendar </StyledBtnDescr>
    <StyledSubtitle>view</StyledSubtitle>
    <StyledText>GooseTrack's Calendar view provides a comprehensive overview of your schedule, displaying all your tasks, events, and appointments in a visually appealing and intuitive layout.</StyledText>
    </WrapItemText>
    <StyledPictureDescr>
        <source
          media="(min-width: 375px)"
          srcSet={`${calendar1x} 1x, ${calendar2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${calendartablet1x} 1x, ${calendartablet2x} 2x`}
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${calendardesk1x} 1x, ${calendardesk2x} 2x`}
        />     
       <StyledImg>
       <img src={calendar2x} alt="Calendar" />
       </StyledImg>
        </StyledPictureDescr>  
  </StyledItem>

  <StyledItem additionalClass={true}>
  <WrapItemText additionalClass={true}>
    <StyledNumberTitle>2.</StyledNumberTitle>
    <StyledSubtitle additionalClass={true}>sidebar</StyledSubtitle>
    <StyledText>GooseTrack offers easy access to your account settings, calendar, and filters. The "My Account" section allows you to manage your profile information and preferences, while the calendar provides a quick and convenient way to view your upcoming events and tasks.</StyledText>
    </WrapItemText>
    <StyledPictureDescr>
        <source
          media="(min-width: 375px)"
          srcSet={`${sidebar1x} 1x, ${sidebar2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${sidebartablet1x} 1x, ${sidebartablet2x} 2x`}
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${sidebardesk1x} 1x, ${sidebardesk2x} 2x`}
        />     
       <StyledImg>
       <img src={sidebar2x} alt="Sidebar" />
       </StyledImg>
        </StyledPictureDescr>  
 
  </StyledItem>
  <StyledItem>
  <WrapItemText>
    <StyledNumberTitle>3.</StyledNumberTitle>
    <StyledBtnDescr>all in</StyledBtnDescr>
    <StyledSubtitle>one</StyledSubtitle>
    <StyledText>GooseTrack is an all-in-one productivity tool that helps you stay on top of your tasks, events, and deadlines. Say goodbye to scattered to-do lists and hello to streamlined productivity with GooseTrack.</StyledText>
    </WrapItemText>
    <StyledPictureDescr>
        <source
          media="(min-width: 375px)"
          srcSet={`${one1x} 1x, ${one2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${onetablet1x} 1x, ${onetablet2x} 2x`}
        />
        <source
          media="(min-width: 1440px)"
          srcSet={`${onedesk1x} 1x, ${onedesk2x} 2x`}
        />     
       <StyledImg>
       <img src={one2x} alt="One" />
       </StyledImg>
        </StyledPictureDescr>    
  </StyledItem>
</StyledList>

{/* Slider */}

<StyledSlider>
<SliderTitle>Reviews</SliderTitle>
<SliderList>
<SliderItem>
            <SliderHeaderUser>
              <SliderUserPhoto src={Olena} alt="Olena Doe"></SliderUserPhoto>
              <HeaderUserWrapper>
                <SliderUserTitle>Olena Doe</SliderUserTitle>
                <SliderUserRating>
                  <Star width={14} height={14} fill="#CEC9C1" />
                  <Star width={14} height={14} fill="#FFAC33" />
                  <Star width={14} height={14} fill="#FFAC33" />
                  <Star width={14} height={14} fill="#FFAC33" />
                  <Star width={14} height={14} fill="#FFAC33" />
                </SliderUserRating>
              </HeaderUserWrapper>
            </SliderHeaderUser>
            <SliderUserDescr>
              GooseTrack is impressive, the calendar view and filter options
              make it easy to stay organized and focused. Highly recommended.
            </SliderUserDescr>
          </SliderItem>

          <SliderItem>
            <SliderHeaderUser>
              <SliderUserPhoto src={Olex} alt="Alexander Hubbard "></SliderUserPhoto>
              <HeaderUserWrapper>
                <SliderUserTitle>Alexander Hubbard </SliderUserTitle>
                <SliderUserRating>
                  <Star width={14} height={14} fill="#CEC9C1" />
                  <Star width={14} height={14} fill="#FFAC33" />
                  <Star width={14} height={14} fill="#FFAC33" />
                  <Star width={14} height={14} fill="#FFAC33" />
                  <Star width={14} height={14} fill="#FFAC33" />
                </SliderUserRating>
              </HeaderUserWrapper>
            </SliderHeaderUser>
            <SliderUserDescr>
              GooseTrack is impressive, the calendar view and filter options
              make it easy to stay organized and focused. Highly recommended.
            </SliderUserDescr>
          </SliderItem>
</SliderList>
<SliderItem>



</SliderItem>

</StyledSlider>



</Wrapper>
</>
       
    );
  };

export default MainPage;





