import React, { Component } from "react";

const ListGroup = ({ items, selected, onSelect }) => {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          key={item._id}
          style={{ cursor: "pointer" }}
          onClick={() => onSelect(item)}
          className={
            item._id === selected._id
              ? "list-group-item active"
              : "list-group-item"
          }
          aria-current="true"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
