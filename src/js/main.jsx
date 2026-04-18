import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import SecondsCounter from "./components/SecondsCounter";

let seconds = 0;

setInterval(function () {
  seconds++;

  const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <SecondsCounter seconds={seconds} />
  );

}, 1000);
