import React from "react";
import styled from "styled-components";

function SkeletonCard() {
  return (
    <Skeleton>
      <HotelImage />
      <HotelInfo>
        <Availability></Availability>
        <Title></Title>
        <Popularity>
          <p>
            <span></span>
          </p>
        </Popularity>
        <RoomsDescription></RoomsDescription>
        <Address></Address>
        <Price></Price>
        <Rating></Rating>
      </HotelInfo>
    </Skeleton>
  );
}

export default SkeletonCard;
const Skeleton = styled.div`
  display: flex;
  width: 95%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 7px;
  margin: 10px auto;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 200px;
`;

const Availability = styled.p`
  font-weight: 400;
  width: 60%;
  background: #ddd;
`;
const Title = styled.h3`
  margin: 0;
  padding: 0 5px;
  width: 20%;
  height: 20px;
  background: #ddd;
`;
const Popularity = styled.div`
  padding: 0 5px;
  margin: 5px 0;
  display: flex;
  color: #42adef;
  img {
    width: 30px;
    height: 30px;
  }
  span {
    font-weight: 800;
  }
  p {
    padding: 3px;
  }
  align-items: center;
  width: 100%;
  height: 20px;
  background: #ddd;
`;
const RoomsDescription = styled.p`
  color: #1398eb;
  background: #ddd;
  width: 60%;
  height: 20px;
`;
const Address = styled.p`
  font-size: 0.8em;
  background: #ddd;
  height: 10px;
  width: 70%;
`;
const Price = styled.div`
  display: flex;
  width: 80px;
  color: #1398eb;
  margin-left: auto;
  width: 20%;
`;
const Rating = styled.p`
  background: #ddd;
  height: 20px;
  background: #ddd;
  width: 20%;
`;
const HotelImage = styled.img`
  width: 40%;
  object-fit: cover;
  background: #ddd;
`;
const HotelInfo = styled.div`
  padding-left: 10px;
  width: 60%;
  width: 100%;
`;
