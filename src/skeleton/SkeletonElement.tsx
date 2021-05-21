import React from "react";
import SkeletonCard from "./SkeletonCard";

function SkeletonElement() {
  const state = Array(6).fill(0);

  return (
    <>
      {state.map((item, id) => (
        <SkeletonCard key={id} />
      ))}
    </>
  );
}

export default SkeletonElement;
