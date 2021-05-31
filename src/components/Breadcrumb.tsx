import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Breadcrumb({ path }: { path: string }) {
  return (
    <BreadCrumb>
      <Link to={"/"}>
        <LinkData>Hotels</LinkData>
      </Link>
      <span>/</span>
      <Link to={path}>
        <LinkData className='active'>Application</LinkData>
      </Link>
    </BreadCrumb>
  );
}

export default Breadcrumb;

const BreadCrumb = styled.div`
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.1);
  padding: 10px;
  display: block;
  .active {
    color: rgba(0, 0, 0, 0.3);
    font-weight: 800;
  }
`;
const LinkData = styled.span`
  padding: 0 5px;
  color: black;
  text-decoration: none;
`;
