import React from "react";

export const LoadingWidget: React.FC = () => (
  <div className="relative flex justify-center items-center h-screen">
    <div className="inline-block animate-spin ease duration-300 w-5 h-5 bg-black mx-2" />
    <div className="inline-block animate-ping ease duration-300 w-5 h-5 bg-black mx-2" />
    <div className="inline-block animate-pulse ease duration-300 w-5 h-5 bg-black mx-2" />
    <div className="inline-block animate-bounce ease duration-300 w-5 h-5 bg-black mx-2" />
  </div>
);
