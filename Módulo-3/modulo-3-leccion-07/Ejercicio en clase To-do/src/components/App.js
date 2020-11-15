import { useState } from 'react';
import React from 'react';
import '../stylesheet/App.scss';
import TaskList from './TaskList';
import TaskCreate from './TaskCreate';

function App(props) {
  const initialData = [{ subject: '', date: 11 }];

  const [taskList, setTaskList] = useState(initialData);

  const createNewTask = (newSubject, newDate) => {
    const newTask = { subject: newSubject, date: newDate };
    // NOOO taskList.push(newTask);
    setTaskList([...taskList, newTask]);

    return (
      <div className="App">
        <main className="container">
          <h3 className="app__title">Lista de tareas</h3>
          <TaskList list={taskList} />
          <TaskCreate handleCreate={createNewTask} />
        </main>
      </div>
    );
  };
}

export default App;
