import React from "react";

const SingleProcess = (props: any) => {
  return (
    <div className="bg-primary flex flex-col items-center p-7 rounded-2xl">
      <span className="opacity-80">{props.item.text}</span>
      <img src={props.item.img} className="" alt="Process 3" />
    </div>
  );
};

export default SingleProcess;
