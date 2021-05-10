import React from "react";
import ReactDOM from "react-dom";


import Nav from '../components/login/header.js'
import Video from '../components/login/video.js'


function Header() {
  return (
    < Nav />
  )
}

function Content() {
  return (
    <div>
      < Video />
    </div>
  );
}




if (document.getElementById("login")) {
  ReactDOM.render(<Header />, document.getElementById("header"));
  ReactDOM.render(<Content />, document.getElementById("login"));
}