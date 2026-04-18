import React from "react";

const SecondsCounter = (props) => {

  const seis = Math.floor(props.seconds / 100000) % 10;
  const cinco = Math.floor(props.seconds / 10000) % 10;
  const cuatro = Math.floor(props.seconds / 1000) % 10;
  const tres = Math.floor(props.seconds / 100) % 10;
  const dos = Math.floor(props.seconds / 10) % 10;
  const uno = Math.floor(props.seconds / 1) % 10;

  return (
    <div className="counter">
      <div className="clock">
        <i className="fa fa-clock"></i>
      </div>

      <div>{seis}</div>
      <div>{cinco}</div>
      <div>{cuatro}</div>
      <div>{tres}</div>
      <div>{dos}</div>
      <div>{uno}</div>
    </div>
  );
};

export default SecondsCounter;