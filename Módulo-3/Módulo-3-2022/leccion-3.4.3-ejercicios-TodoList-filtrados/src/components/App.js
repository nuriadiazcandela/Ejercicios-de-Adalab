import '../styles/App.css';
import { useState } from 'react';

const App = () => {
  const [inputName, setInputName] = useState('');
  const [tasks, setTasks] = useState([
    { task: 'Comprar harina, jamón y pan rallado', completed: true },
    { task: 'Hacer croquetas ricas', completed: true },
    { task: 'Ir a la puerta de un gimnasio', completed: false },
    { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false },
  ]);

  const handleCheck = (ev) => {
    const clickedTaskId = ev.currentTarget.id;
    tasks[clickedTaskId].completed = !tasks[clickedTaskId].completed;
    setTasks([...tasks]);
  };

  const handleFilterName = (ev) => {
    setInputName(ev.target.value);
  };

  const renderTasks = () => {
    return tasks
      .filter((task) => {
        return task.task.toLocaleLowerCase().includes(inputName.toLocaleLowerCase());
      })

      .map((task, index) => {
        return (
          <li
            id={index}
            key={index}
            className={task.completed ? 'completed' : ''}
            onClick={handleCheck}
          >
            {task.task}
          </li>
        );
      });
  };

  const completed = tasks.filter((task) => task.completed);
  const noCompleted = tasks.filter((task) => !task.completed);

  return (
    <div className="App">
      <h1>Mi lista de tareas</h1>
      <label htmlFor="inputName">Buscar tarea: </label>
      <input type="text" name="" id="" value={inputName} onChange={handleFilterName} />
      <ol>{renderTasks()}</ol>
      <p>Tareas totales: {tasks.length}</p>
      <p>Tareas completadas: {completed.length} </p>
      <p>Tareas pendientes:{noCompleted.length} </p>
    </div>
  );
};

export default App;
