"use client";
import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React from "react";

const Provider = ({ children }) => {
  return (
    <>
      <ProgressBar />
      {children}
    </>
  );
};

export default Provider;
