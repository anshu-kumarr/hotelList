import React, { useEffect } from "react";
import "./style.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import HotelList from "./components/HotelList";
import Maps from "./components/Maps";
import Navbar from "./components/Navbar";
import NavBarButton from "./components/NavBarButton";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state: any) => state.hotelList);

  function apiCall() {
    if (state.length <= 0) {
      setTimeout(
        () =>
          axios.get("https://reqres.in/api/users?page=1").then((response) => {
            const response1 = response.data.data;
            const data = [...response1];
            dispatch({
              type: "INITIALIZE",
              payload: { data: data, count: response.data.total },
            });
            dispatch({ type: "ADD_TO_DISPLAY", payload: data });
          }),
        2000
      );
    }
  }

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <>
      <Navbar />
      <hr style={{ margin: 0 }} />
      <NavBarButton />
      <hr style={{ margin: 0 }} />
      <MainContainer>
        <HotelList />
        <Maps />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: flex;
  min-width: 250px;
`;
export default App;
