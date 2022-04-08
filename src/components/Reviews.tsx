import React, { ReactElement } from "react";
import styled from "styled-components";
import ReviewContent from "./ReviewContent";

interface Props {
  toggle: boolean;
}

function Reviews({ toggle }: Props): ReactElement {
  return (
    <ReviewsContainer toggle={toggle}>
      <ReviewContent />
      <ReviewContent />
      <ReviewContent />
    </ReviewsContainer>
  );
}

export default Reviews;

const ReviewsContainer = styled.div<{ toggle: boolean }>`
  overflow: scroll;
  height: 50vh;
  position: absolute;
  top: 0;
  width: 100%;
  ${({ toggle }) =>
    toggle
      ? `margin-left:400%;transition: all 100ms ease-out ;`
      : `transition: all 290ms ease-in;
          @media(max-width:1000px){
            height:35vh;
          }
          @media(width:1024px){
            height:25vh;
          }
      `}
`;
