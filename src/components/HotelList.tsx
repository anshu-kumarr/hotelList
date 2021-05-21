import React, { useEffect } from "react";
import styled from "styled-components";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import HotelDetail from "./HotelDetail";
import SkeletonElement from "../skeleton/SkeletonElement";
import axios from "axios";

interface itemType {
  id: number;
  email?: string;
  first_name?: string;
  last_name?: string;
  avatar?: string;
}
interface initial {
  hotelList: Array<itemType>;
  renderList: Array<itemType>;
  countOfHotel: number;
  displayIndex: number;
  showMap: boolean;
}

function HotelList() {
  const dispatch = useDispatch();
  const hotelList = useSelector((state: initial) => state.hotelList);

  function apiCall() {
    if (hotelList.length <= 0) {
      setTimeout(
        () =>
          axios.get("https://reqres.in/api/users?page=1").then((res) => {
            const response = res.data.data;
            const data = [...response];
            dispatch({
              type: "INITIALIZE",
              payload: { data: data, count: res.data.total },
            });
            dispatch({
              type: "ADD_TO_DISPLAY",
              payload: { data: data, count: res.data.total },
            });
          }),
        2000
      );
    }
  }
  useEffect(() => {
    apiCall();
  }, []);

  function handleClick() {
    axios.get("https://reqres.in/api/users?page=2").then((res) => {
      const response = res.data.data;
      const data = [...response];
      dispatch({
        type: "INITIALIZE",
        payload: { data, count: res.data.total },
      });
      dispatch({
        type: "START",
        payload: { data: data, count: res.data.total },
      });
    });
  }

  const hotelState = useSelector((state: RootStateOrAny) => {
    return {
      list: state.renderList,
      count: state.countOfHotel,
      showMap: state.showMap,
    };
  });
  const { list, count, showMap } = hotelState;

  return (
    <HotelListDisplay toggle={showMap}>
      {list && (
        <>
          {list.length > 0 && (
            <CountDisplay toggle={showMap}>{count} places to stay</CountDisplay>
          )}
          {list.map((item: itemType, idx: number) => {
            let hotelName = item.first_name + " " + item.last_name;
            return <HotelDetail title={hotelName} key={idx} />;
          })}
          {list.length === 6 ? (
            <DisplayMore onClick={handleClick}>More</DisplayMore>
          ) : (
            ""
          )}
        </>
      )}
      {list.length === 0 && <SkeletonElement />}
    </HotelListDisplay>
  );
}

export default HotelList;

const HotelListDisplay = styled.div<{ toggle: Boolean }>`
  height: 80vh;
  width: 100%;
  padding: 15px;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  ${(props) =>
    props.toggle
      ? `width:50%;transition: all 300ms ease-out;`
      : `width:100%;transition: width 300ms ease-out;margin:0 auto;`}

  @media(max-width:576px) {
    width: 100%;
  }
  @media (max-width: 776px) {
    height: 68vh;
  }
  @media (width: 1024px) {
    height: 45vh;
  }
  @media (width: 768px) {
    height: 55vh;
  }
  @media (max-width: 250px) {
    height: 100vh;
    width: 100%;
  }
`;
const CountDisplay = styled.div<{ toggle: Boolean }>`
  ${({ toggle }) => (toggle ? "" : `margin-left:18px;`)}
  color: gray;
  font-size: 2rem;
  font-weight: 600;
`;
const DisplayMore = styled.button`
  width: 100%;
  margin: 10px auto;
  padding: 5px;
  border: none;
  outline: none;
  cursor: pointer;
  background: #cfeafb;
  &:hover {
    background: #42adef;
  }
`;
