import React from "react";
import styled from "styled-components";

interface props {
  show: boolean;
}

function HamMenu({ show }: props) {
  return (
    <Menu show={show}>
      <MenuItem>Become A Host</MenuItem>
      <MenuItem>Register</MenuItem>
      <MenuItem>Login</MenuItem>
      <MenuItem>Help</MenuItem>
    </Menu>
  );
}

export default HamMenu;

const Menu = styled.div<{ show: boolean }>`
  display: none;
  position: absolute;
  right: 0;
  top: 60px;
  padding: 10px;
  background: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
  ${({ show }) => (show ? "display:block;" : "display:none;")}
`;

const MenuItem = styled.div``;
