import React from "react";
import ReactDOM from "react-dom";


import Header from '../components/login/header.js'
import Video from '../components/login/video.js'


export default function App() {
  return (
    <div>
      < Header />
      < Video />
    </div>
  );
}


if (document.getElementById("login")) {
  ReactDOM.render(<App />, document.getElementById("login"));
}