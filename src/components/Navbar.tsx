import React, { useState } from "react";
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import styled from "styled-components";
import search from "../search";
import HamMenu from "./HamMenu";

export default function Navbar() {
  const dispatch = useDispatch();
  const hotelList = useSelector((state: RootStateOrAny) => state.hotelList);
  const [showMenu, setShow] = useState(false);
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const filteredData = search(event.target.value, hotelList);
    dispatch({
      type: "ADD_TO_DISPLAY",
      payload: { data: filteredData, count: filteredData.length },
    });
  }

  return (
    <NavBarContainer>
      <div
        className='inp'
        style={{
          display: "flex",
          width: "50%",
          justifyContent: "space-evenly",
        }}
      >
        <NavBarIcon>
          <HotelIcon src={"/assets/image/hotel.jpeg"} />
        </NavBarIcon>
        <NavBarInputBox>
          <NavBarInput
            onChange={handleChange}
            placeholder='Search'
          ></NavBarInput>
          <SearchIcon src={"/assets/image/search.png"} className='search' />
        </NavBarInputBox>
      </div>
      <Hamburger onClick={() => setShow((p) => !p)}>
        <HamIcon src={"/assets/image/hamburger.png"} />
      </Hamburger>
      <HamMenu show={showMenu} />
      <NavBarLink>
        <NavLink>Become a Host</NavLink>
        <NavLink>Register</NavLink>
        <NavLink>Login</NavLink>
        <NavLink>Help</NavLink>
      </NavBarLink>
    </NavBarContainer>
  );
}

const NavBarContainer = styled.div`
  margin-bottom: 5px;
  margin-top: 15px;
  display: flex;
  padding: 10px;
  .inp {
    @media (max-width: 400px) {
      width: 70%;
    }
  }
`;
const NavBarInput = styled.input`
  width: 100%;
  padding: 10px;
  outline: none;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.3);
  :focus {
    outline: none;
    box-shadow: 0 0 5px #08aadb;
  }
`;
const NavBarIcon = styled.div`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavBarInputBox = styled.div`
  position: relative;
  width: 80%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .search {
    width: 20px;
    position: absolute;
    padding: 0.5rem;
    right: 0;
  }
`;
const NavBarLink = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`;
const NavLink = styled.p`
  margin: 0 20px;
  &:hover {
    cursor: pointer;
  }
`;
const Hamburger = styled.div`
  align-items: center;
  display: none;
  @media (max-width: 400px) {
    width: 30%;
  }
  @media (max-width: 900px) {
    display: flex;
    width: 50%;
    justify-content: flex-end;
  }
`;
const SearchIcon = styled.img``;
const HamIcon = styled.img`
  width: 40px;
`;
const HotelIcon = styled.img`
  width: 40px;
  object-fit: cover;
  padding: 0 2px;
`;
