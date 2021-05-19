import React, { ReactElement } from "react";
import { RootStateOrAny, useSelector } from "react-redux";
import styled from "styled-components";
import SkeletonCard from "./SkeletonCard";

interface Props {}

function SkeletonElement() {
  const state = Array(6).fill(0);

  return (
    <>
      {state.map((item: any) => (
        <SkeletonCard />
      ))}
    </>
  );
}

export default SkeletonElement;
