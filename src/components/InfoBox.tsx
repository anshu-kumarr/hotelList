import React, { useState, useRef, useEffect } from "react";
import Information from "./Information";
import Reviews from "./Reviews";
import Carousel from "./Carousel";
import styled from "styled-components";

interface Props {
  title: string;
}

const InfoBox = (props: Props) => {
  useEffect(() => setToggle({ toggle: true, tar: start.current }), []);
  const start = useRef();
  const [state, setToggle] = useState({ toggle: true, tar: start.current });
  function handleClick(e: any) {
    setToggle((ps) => {
      if (ps.tar !== e.target) return { toggle: !ps.toggle, tar: e.target };
      else return ps;
    });
  }

  return (
    <InfoBoxContainer>
      <InfoImage>
        <Carousel />
      </InfoImage>
      <InfoTitle>{props.title}</InfoTitle>
      <Hr />
      <InfoTab>
        <TabIndicator toggle={state.toggle}></TabIndicator>
        <InfoButton ref={start} onClick={handleClick} toggle={state.toggle}>
          Info
        </InfoButton>
        <ReviewButton onClick={handleClick} toggle={state.toggle}>
          Reviews
        </ReviewButton>
      </InfoTab>
      <ToggleContainer toggle={state.toggle}>
        {/* {state.toggle ? <Information toggle={state.toggle} /> : <Reviews />} */}
        <Information toggle={state.toggle} />
        <Reviews toggle={state.toggle} />
      </ToggleContainer>
    </InfoBoxContainer>
  );
};

export default InfoBox;

const InfoBoxContainer = styled.div`
  margin: 0 2px;
  width: 25%;
  min-width: 300px;
  @media (max-width: 576px) {
    width: 100%;
  }
`;
const InfoImage = styled.div`
  height: 200px;
  object-fit: cover;
  width: 100%;
`;
const InfoTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;
const Hr = styled.hr`
  /* box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.1); */
  background: rgba(0, 0, 0, 0.2);
`;
const InfoTab = styled.div`
  display: flex;
  margin-bottom: 10px;
  position: relative;
`;
const InfoButton = styled.div<{ toggle: Boolean; ref: any }>`
  cursor: pointer;
  padding: 3px;
  margin-bottom: 5px;
  align-items: center;
  text-align: center;
  width: 50%;
  ${({ toggle }) => (toggle ? `color:#42adef` : ``)}
`;
const ReviewButton = styled.div<{ toggle: Boolean }>`
  cursor: pointer;
  padding: 3px;
  align-items: center;
  text-align: center;
  width: 50%;
  margin-bottom: 5px;
  ${({ toggle }) =>
    toggle
      ? ``
      : `color:#42adef;
  `}
`;

const ToggleContainer = styled.div<any>`
  position: relative;
  height: 52vh;
  /* ${({ toggle }) => (toggle ? `overflow:auto` : `overflow:scroll`)} */
`;

const TabIndicator = styled.div<any>`
  position: absolute;
  height: 5px;
  width: 50%;
  background: #42adef;
  bottom: 0;
  transition: 0.5s;
  border-radius: 4px;
  ${({ toggle }) => (toggle ? `left : 0` : `left:50%`)}
`;
