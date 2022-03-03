import React, { Component } from "react";
import "font-awesome/css/font-awesome.css";

const Like = ({ liked, onLike }) => {
  let classes = liked ? "fa fa-heart" : "fa fa-heart-o";
  return (
    <div>
      <i style={{ cursor: "pointer" }} onClick={onLike} className={classes}></i>
    </div>
  );
};

export default Like;
