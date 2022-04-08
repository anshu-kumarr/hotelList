import React, { ReactElement } from "react";
import styled from "styled-components";
import RoomContent from "./RoomContent";
interface Props {
  toggle: boolean;
}

function Information({ toggle }: Props): ReactElement {
  return (
    <InformationContainer toggle={toggle}>
      <div>
        <RoomContent />
        <RoomContent />
        <RoomContent />
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

const InformationContainer = styled.div<{ toggle: boolean }>`
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

const Amenities = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: wrap;
  div {
    width: 50%;
    text-align: center;
  }
`;
