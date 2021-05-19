import React, { ReactElement } from "react";
import styled from "styled-components";
import FontAwesome from "react-fontawesome";
interface Props {
  toggle: boolean;
}

function Information({ toggle }: Props): ReactElement {
  return (
    <InformationContainer toggle={toggle}>
      <div>
        <RoomInfo>
          <RoomInfoIcon>
            <FontAwesome name='home' size='2x' />{" "}
          </RoomInfoIcon>
          <div>
            <RoomInfoTitle>Entire Apartment</RoomInfoTitle>
            <RoomInfoDesc>4 Guest 1 Bedroom 4 Guest 1 Bedroom</RoomInfoDesc>
          </div>
        </RoomInfo>
        <RoomInfo>
          <RoomInfoIcon>
            <FontAwesome name='home' size='2x' />{" "}
          </RoomInfoIcon>
          <div>
            <RoomInfoTitle>Entire Apartment</RoomInfoTitle>
            <RoomInfoDesc>4 Guest 1 Bedroom 4 Guest 1 Bedroom</RoomInfoDesc>
          </div>
        </RoomInfo>
        <RoomInfo>
          <RoomInfoIcon>
            <FontAwesome name='home' size='2x' />{" "}
          </RoomInfoIcon>
          <div>
            <RoomInfoTitle>Entire Apartment</RoomInfoTitle>
            <RoomInfoDesc>4 Guest 1 Bedroom 4 Guest 1 Bedroom</RoomInfoDesc>
          </div>
        </RoomInfo>
      </div>
      <hr />

      <Amenities>
        <div style={{ fontWeight: 600, width: "100%", marginBottom: "5px" }}>
          Amenities
        </div>
        <div>Air Condition</div>
        <div>Air Condition</div>
        <div>Air Condition</div>
        <div>Air Condition</div>
      </Amenities>
    </InformationContainer>
  );
}

export default Information;

const InformationContainer = styled.div<any>`
  width: 100%;
  color: gray;
  ${({ toggle }) =>
    toggle
      ? `transition: all 300ms ease-in;
    @media(max-width:1000px){
            height:35vh;
            overflow:scroll;
          }
          @media(width:1024px){
            height:25vh;
            overflow:scroll;
          }
      `
      : `margin-left:-800px; transition: all 300ms ease-out`}
`;
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
const Amenities = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: wrap;
  div {
    width: 50%;
    text-align: center;
  }
`;
