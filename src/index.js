import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

//import "bootstrap/dist/css/bootstrap.css";
// import Counter from './Components/counter'
//import CounterNew from './Components/CounterNew'
//import Counterlist from  "./Components/Counterlist"
//import ConditionalRendering from "./Components/conditionalRedering"

//import EventHandling from "./Components/eventhandling";
//import BindingEventHandlers from "./Components/BindingEventHandlers"

//import ArrowFunction from  "./Components/ArrowfunctionReducebindcode"

//import Updatingstate from "./Components/Updatingthestate"

//import PassingEventArguments from  "./Components/PassingEventArguments"
//import WhatHappensWhenStateChanges from "./Components/WhatHappensWhenStateChanges";

//   document.getElementById('nm')
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

//ReactDOM.render(<CounterNew />,document.getElementById("root"));
// ReactDOM.render(<Counterlist />,document.getElementById("root"));

//ReactDOM.render(<ConditionalRendering />,document.getElementById("root"));
//ReactDOM.render(<EventHandling />,document.getElementById("root"));
//ReactDOM.render(<BindingEventHandlers />,document.getElementById("root"));

//ReactDOM.render(<ArrowFunction />,document.getElementById("root"));

//ReactDOM.render(<Updatingstate />,document.getElementById("root"));

//ReactDOM.render(<PassingEventArguments />,document.getElementById("root"))
// ReactDOM.render(<WhatHappensWhenStateChanges />, document.getElementById("root"));

//ReactDOM.render(<Counter />,document.getElementById("root"));
