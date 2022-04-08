import React from "react";
import styled from "styled-components";

function RoomContent() {
  return (
    <RoomInfo>
      <RoomInfoIcon>
        <HomeIcon src={"/assets/image/home.png"} />
      </RoomInfoIcon>
      <div>
        <RoomInfoTitle>Entire Apartment</RoomInfoTitle>
        <RoomInfoDesc>4 Guest 1 Bedroom 4 Guest 1 Bedroom</RoomInfoDesc>
      </div>
    </RoomInfo>
  );
}

export default RoomContent;

const RoomInfo = styled.div`
  display: flex;
  padding: 10px 20px;
`;
const RoomInfoTitle = styled.div`
  font-weight: 600;
  color: rgba(0, 0, 0, 0.7);
`;
const RoomInfoDesc = styled.div`
  max-width: 80%;
`;
const RoomInfoIcon = styled.div`
  margin: 10px;
  color: #42adef;
`;
const HomeIcon = styled.img`
  height: 20px;
  width: 20px;
  object-fit: cover;
`;
