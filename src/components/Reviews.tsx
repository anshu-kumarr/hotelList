import React, { ReactElement } from "react";
import FontAwesome from "react-fontawesome";
import styled from "styled-components";

interface Props {
  toggle: boolean;
}

function Reviews({ toggle }: Props): ReactElement {
  return (
    <ReviewsContainer toggle={toggle}>
      <ReviewBox>
        <ReviewHead>
          <FontAwesome style={{ color: "#178fda" }} name='user' size='3x' />
          <ReviewTime>
            <div style={{ fontWeight: 600 }}>Person</div> <div>May 4 2020</div>
          </ReviewTime>
        </ReviewHead>
        <ReviewBody>
          The staff were very approachable and helpful. The breakfast was good.
          They arranged for a taxi to pick us up from the airport and then back
          again at the end of our stay. The suite was very good with comfortable
          furniture and the bed was comfortable too. We would definitely stay
          here again.
        </ReviewBody>
      </ReviewBox>
      <ReviewBox>
        <ReviewHead>
          <FontAwesome style={{ color: "#178fda" }} name='user' size='3x' />
          <ReviewTime>
            <div style={{ fontWeight: 600 }}>Person</div> <div>May 4 2020</div>
          </ReviewTime>
        </ReviewHead>
        <ReviewBody>
          The staff were very approachable and helpful. The breakfast was good.
          They arranged for a taxi to pick us up from the airport and then back
          again at the end of our stay. The suite was very good with comfortable
          furniture and the bed was comfortable too. We would definitely stay
          here again.
        </ReviewBody>
      </ReviewBox>
      <ReviewBox>
        <ReviewHead>
          <FontAwesome style={{ color: "#178fda" }} name='user' size='3x' />
          <ReviewTime>
            <div style={{ fontWeight: 600 }}>Person</div> <div>May 4 2020</div>
          </ReviewTime>
        </ReviewHead>
        <ReviewBody>
          The staff were very approachable and helpful. The breakfast was good.
          They arranged for a taxi to pick us up from the airport and then back
          again at the end of our stay. The suite was very good with comfortable
          furniture and the bed was comfortable too. We would definitely stay
          here again.
        </ReviewBody>
      </ReviewBox>
    </ReviewsContainer>
  );
}

export default Reviews;

const ReviewsContainer = styled.div<any>`
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
const ReviewBox = styled.div`
  padding: 20px;
`;
const ReviewHead = styled.div`
  display: flex;
`;
const ReviewTime = styled.div`
  padding: 0 10px;
`;
const ReviewBody = styled.div`
  font-size: 0.8rem;
  padding: 10px 0;
  color: grey;
`;
