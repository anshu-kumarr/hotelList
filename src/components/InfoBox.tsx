import React, { useState, useRef, useEffect } from "react";
import Information from "./Information";
import Reviews from "./Reviews";
import styled from "styled-components";

interface Props {
  title: string;
}
interface stateType {
  toggle: boolean;
  tar?: EventTarget;
}

const InfoBox = (props: Props) => {
  useEffect(() => setToggle({ toggle: true, tar: start.current }), []);
  const start = useRef();
  const [state, setToggle] = useState<stateType>({
    toggle: true,
    tar: start.current,
  });
  function handleClick(e: React.MouseEvent<HTMLInputElement>) {
    setToggle((ps: stateType) => {
      if (ps.tar !== e.target) return { toggle: !ps.toggle, tar: e.target };
      else return ps;
    });
  }

  return (
    <InfoBoxContainer>
      <InfoImage>
        <HotelImage src={"/assets/image/hotel-inner.png"} />
      </InfoImage>
      <InfoTitle>{props.title}</InfoTitle>
      <Hr />
      <InfoTab>
        <TabIndicator toggle={state.toggle}></TabIndicator>
        <InfoButton onClick={handleClick} toggle={state.toggle}>
          Info
        </InfoButton>
        <ReviewButton onClick={handleClick} toggle={state.toggle}>
          Reviews
        </ReviewButton>
      </InfoTab>
      <ToggleContainer>
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
  background: rgba(0, 0, 0, 0.2);
`;
const InfoTab = styled.div`
  display: flex;
  margin-bottom: 10px;
  position: relative;
`;
const InfoButton = styled.div<{ toggle: boolean }>`
  cursor: pointer;
  padding: 3px;
  margin-bottom: 5px;
  align-items: center;
  text-align: center;
  width: 50%;
  ${({ toggle }) => (toggle ? `color:#42adef` : ``)}
`;
const ReviewButton = styled.div<{ toggle: boolean }>`
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

const ToggleContainer = styled.div`
  position: relative;
  height: 52vh;
`;

const TabIndicator = styled.div<{ toggle: boolean }>`
  position: absolute;
  height: 5px;
  width: 50%;
  background: #42adef;
  bottom: 0;
  transition: 0.5s;
  border-radius: 4px;
  ${({ toggle }) => (toggle ? `left : 0` : `left:50%`)}
`;
const HotelImage = styled.img`
  object-fit: cover;
  height: 200px;
`;
