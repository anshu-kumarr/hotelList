import React from "react";
import styled from "styled-components";
import { RouteComponentProps, useHistory } from "react-router-dom";

interface props {
  title: string;
}

function HotelDetail(props: props) {
  const history = useHistory();
  function handleRoute() {
    history.push({ pathname: `info/${props.title}` });
  }
  return (
    <HotelDetailContainer onClick={handleRoute}>
      <HotelImage
        src={
          "http://www.jjtravelonline.com/images/inner-services/hotel-inner.png"
        }
      />
      <HotelInfo>
        <Availability>Entire Apartment</Availability>
        <Title>{props.title}</Title>
        <Popularity>
          <img
            src={"https://image.flaticon.com/icons/png/512/906/906338.png"}
            alt='feed'
          ></img>
          <p>
            <span>RARE FIND</span> This place is usually booked.
          </p>
        </Popularity>
        <RoomsDescription>
          2 guests * 1 bedroom * 3 Beds * 1 Bath
        </RoomsDescription>
        <Address>2a Sydney Rd, Brunswick , Uttam Nagar , Australia</Address>
        <Price>$102/night</Price>
        <Rating>⭐️ (1) * Superhost</Rating>
      </HotelInfo>
    </HotelDetailContainer>
  );
}

export default HotelDetail;

const HotelDetailContainer = styled.div`
  font-size: 0.9rem;
  display: flex;
  color: grey;
  width: 95%;
  p {
    margin: 5px 0;
    padding: 0 5px;
  }
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 7px;
  margin: 10px auto;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
const Availability = styled.p`
  font-weight: 400;
`;
const Title = styled.h3`
  margin: 0;
  padding: 0 5px;
`;
const Popularity = styled.div`
  padding: 0 5px;
  margin: 5px 0;
  display: flex;
  background: #cfeafb;
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
`;
const RoomsDescription = styled.p`
  color: #1398eb; ;
`;
const Address = styled.p`
  font-size: 0.8em;
`;
const Price = styled.div`
  display: flex;
  width: 80px;
  color: #1398eb;
  margin-left: auto;
`;
const Rating = styled.p``;
const HotelImage = styled.img`
  width: 40%;
  object-fit: cover;
`;
const HotelInfo = styled.div`
  padding-left: 10px;
  width: 60%;
`;
