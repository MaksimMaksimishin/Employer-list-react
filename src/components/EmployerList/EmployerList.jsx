import React from "react";
import { EmployerItem } from "./EmployerItem";
import "./EmployerList.css";

export const EmployerList = ({ data, removeEmployer, toggleActiveStatus }) => {
  return (
    <ul className="employer-list">
      {data.map((item, index) => (
        <EmployerItem
          key={item.id}
          item={item}
          index={index}
          removeEmployer={removeEmployer}
          toggleActiveStatus={toggleActiveStatus}
        />
      ))}
    </ul>
  );
};