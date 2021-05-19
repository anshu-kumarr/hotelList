import React, { ReactElement, useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  LoadScript,
  Marker,
} from "@react-google-maps/api";
import { data } from "../MarkerData";
import styled from "styled-components";
import { RootStateOrAny, useSelector } from "react-redux";
import { relative } from "path";
interface Props {}
const mapStyles = {
  height: "100%",
  width: "100%",
  outline: "none",
};

// const defaultCenter = {
//   lat: -35.78845,
//   lng: 140.96268,
// };
function Maps(props: any): ReactElement {
  const state = useSelector((state: RootStateOrAny) => state.showMap);
  const [selected, setSelected] = useState<any>({});
  const [center, setCenter] = useState({ lat: -30.27891, lng: 153.137909 });
  function handleSelect(item: any) {
    setCenter({ lat: +item.lat, lng: +item.lng });
    setSelected(item);
  }

  return (
    <MapDisplay toggle={state}>
      <LoadScript googleMapsApiKey='AIzaSyAPvlFH6siXN9mhGa3of31-QJAOOZcI6To'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={5}
          center={center}
          options={{
            gestureHandling: "greedy",
            fullscreenControl: true,
            streetViewControl: true,
          }}
          onClick={() => setSelected({})}
        >
          {data.hotels.map((item) => {
            return (
              <Marker
                key={item.name}
                // title={item.name}
                position={{ lat: +item.lat, lng: +item.lng }}
                onClick={() => handleSelect(item)}
                // clickable={true}
              />
            );
          })}

          {selected.lat && (
            <InfoWindow
              position={{ lat: +selected.lat, lng: +selected.lng }}
              onCloseClick={() => setSelected({})}
              options={{ pixelOffset: new window.google.maps.Size(0, -40) }}
            >
              <InfoBoxContainer>
                <InfoImage
                  src={
                    "http://www.jjtravelonline.com/images/inner-services/hotel-inner.png"
                  }
                />
                <InfoTitle>{selected.name}</InfoTitle>
                <Popularity>
                  <img
                    src={
                      "https://image.flaticon.com/icons/png/512/906/906338.png"
                    }
                    alt='feed'
                  ></img>
                  <div>
                    <span>RARE FIND</span> This place is usually booked.
                  </div>
                </Popularity>
                <RoomsDescription>
                  2 guests * 1 bedroom * 3 Beds * 1 Bath
                </RoomsDescription>
                <Address>{selected.address}</Address>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Rating>⭐️ (1) * Superhost</Rating>
                  <Price>${selected.price}/night</Price>
                </div>
              </InfoBoxContainer>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </MapDisplay>
  );
}

export default Maps;

const MapDisplay = styled.div<{ toggle: Boolean }>`
  width: ${(props) => (props.toggle ? "50%" : "0")};
  transition: all 300ms ease-out;
  @media (max-width: 576px) {
    width: 0%;
  }
`;

const InfoBoxContainer = styled.div`
  width: 250px;
  overflow: hidden;
  padding: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
`;
const InfoImage = styled.img`
  height: 150px;
  object-fit: cover;
  width: 250px;
`;
const InfoTitle = styled.div`
  font-size: 1rem;
  font-weight: 600;
`;
const Popularity = styled.div`
  padding: 0 3px;
  margin: 3px 0;
  display: flex;
  background: #cfeafb;
  color: #42adef;
  img {
    width: 20px;
    height: 20px;
  }
  span {
    font-weight: 600;
  }
  div {
    padding: 3px;
    display: flex;
  }
  align-items: center;
`;
const RoomsDescription = styled.div`
  color: #1398eb; ;
`;
const Address = styled.div`
  font-size: 0.8em;
`;
const Price = styled.div`
  color: #1398eb;
  font-weight: 600;
`;
const Rating = styled.div``;
