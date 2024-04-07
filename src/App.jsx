import React, { useState, useEffect } from "react";
import { AddForm } from "./components/AddForm";
import { EmployerList } from "./components/EmployerList";

const App = () => {
  const [empList, setEmpList] = useState([]);
  const [nextId, setNextId] = useState(0);

  useEffect(() => {
    fetchEmployees();
    fetchNextId();
  }, []);

  const fetchEmployees = () => {
    fetch('http://localhost:3001/employees')
      .then(response => response.json())
      .then(data => setEmpList(data))
      .catch(error => console.error('Ошибка при получении данных:', error));
  };

  const fetchNextId = () => {
    fetch('http://localhost:3001/nextId')
      .then(response => response.json())
      .then(data => setNextId(data.nextId))
      .catch(error => console.error('Ошибка при получении следующего ID:', error));
  };

  const addEmployer = (employer) => {
    const newEmployer = { ...employer, id: nextId };
    fetch('http://localhost:3001/employees', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmployer),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при добавлении работодателя');
        }
        return response.json();
      })
      .then(data => {
        setEmpList([...empList, data]);
        setNextId(nextId + 1); 
      })
      .catch(error => console.error(error));
  };

  const removeEmployer = (id) => {
    fetch(`http://localhost:3001/employees/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Ошибка при удалении работодателя');
        }
        setEmpList(empList.filter(emp => emp.id !== id));
      })
      .catch(error => console.error(error));
  };

  const toggleActiveStatus = (id) => {
    const updatedEmpList = empList.map(emp => {
      if (emp.id === id) {
        return { ...emp, active: !emp.active };
      }
      return emp;
    });
    setEmpList(updatedEmpList);
  };

  return (
    <div className="container">
      <h1>Список работодателей</h1>

      <div className="employer-list-app">

        <AddForm addEmployer={addEmployer} />

        <div className="employer-list-block">

          <p className="employer-list-count">
            Количество работодателей: <span>{empList.length}</span>
          </p>

          <EmployerList
            data={empList}
            removeEmployer={removeEmployer}
            toggleActiveStatus={toggleActiveStatus}
          />

        </div>

      </div>
    </div>
  );
};

export default App;
