// EmployerItem.js
import React from "react";
import "./EmployerItem.css";

export const EmployerItem = ({ item, index, removeEmployer, toggleActiveStatus }) => {
  const handleDelete = () => {
    removeEmployer(item.id);
  };

  const handleToggleActive = () => {
    toggleActiveStatus(item.id);
  };

  return (
    <li className={`employer-item ${!item.active ? 'inactive' : ''}`}>
      <span className="employer-item__number">{index + 1}.</span>
      <div className="employer-item__info-block">
        <span className="employer-item__info employer-item__info_name">{item.name}</span>
        <span className="employer-item__info employer-item__info_surname">{item.surname}</span>
      </div>
      <div className="employer-item__action-block">
        <button className="employer-item__btn employer-item__btn_edit" onClick={handleToggleActive}>
          {item.active ? 'Деактивировать' : 'Активировать'}
        </button>
        <button className="employer-item__btn employer-item__btn_del" onClick={handleDelete}>
          Удалить
        </button>
      </div>
    </li>
  );
};
