// AddForm.js
import React, { useState } from "react";
import "./AddForm.css";

export const AddForm = ({ addEmployer }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const addHandler = () => {
    const employer = {
      name,
      surname,
      active: true
    };
    addEmployer(employer);
    setName('');
    setSurname('');
  };

  return (
    <div className="employer-add-form">
      <input
        onChange={e => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Имя"
        className="employer-add-form__input"
      />
      <input
        onChange={e => setSurname(e.target.value)}
        value={surname}
        type="text"
        placeholder="Фамилия"
        className="employer-add-form__input"
      />
      <button
        onClick={addHandler}
        className="employer-add-form__btn"
      >
        Добавить
      </button>
    </div>
  );
};
