import React, { Component } from "react";

const Like = (props) => {
  let Classes = "fa fa-heart";
  if (!props.liked) Classes += "-o";
  return (
    <i
      onClick={props.onClick}
      style={{ cursor: "pointer" }}
      className={Classes}
      aria-hidden="true"
    ></i>
  );
};

export default Like;
