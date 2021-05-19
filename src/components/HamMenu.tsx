import React from "react";
import styled from "styled-components";

function HamMenu({ show }: any) {
  return (
    <Menu show={show}>
      <div>Become A Host</div>
      <div>Register</div>
      <div>Login</div>
      <div>Help</div>
    </Menu>
  );
}

export default HamMenu;

const Menu = styled.div<any>`
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
