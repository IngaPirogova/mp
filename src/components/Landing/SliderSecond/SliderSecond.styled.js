import styled from '@emotion/styled';




export const Wrapper = styled.div`
  margin: 0 auto;
  padding-inline: 20px;
  max-width: 375px;

  
`;

export const ReviewsTitle = styled.h3`
  text-align: center;
  margin: 0;
  margin-bottom: 40px;
  padding: 0;
 
  font-size: 28px;
  line-height: 32px;
  text-transform: uppercase;
 
`;

export const ReviewsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin: 0;
  margin-bottom: 8px;
  list-style: none;

  
`;

export const ReviewsItem = styled.div`
  box-sizing: border-box;
  padding: 24px;
  max-width: 335px;
  height: 194px;

  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 8px;

  
  background-attachment: fixed;
  background-size: contain;

 
`;

export const AuthorTop = styled.div`
  display: flex;
  gap: 18px;
  margin-bottom: 24px;

  
`;

export const AuthorTopRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`;

export const AuthorPhoto = styled.img`
  display: block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
`;

export const UserIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;

  border-radius: 50%;
 
`;

export const AuthorTitle = styled.h4`
  margin: 0;
  margin-bottom: 13px;
  padding: 0;
  
  line-height: 18px;
  
`;

export const AuthorRating = styled.div`
  display: flex;
  gap: 10px;
`;

export const AuthorReview = styled.p`
  margin: 0;
  padding: 0;
 
  line-height: 18px;
  color: rgba(17, 17, 17, 0.7);

  
`;

export const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin-top: 20px;
`;

export const SwiperButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  width: 61px;
  height: 48px;
  cursor: pointer;
  

  &:hover {
    
    transform: scale(1.05);
  }

  &:active {
    transform: scale(1);
  }
`;