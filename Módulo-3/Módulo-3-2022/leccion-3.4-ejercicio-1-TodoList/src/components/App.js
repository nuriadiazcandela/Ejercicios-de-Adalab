import '../styles/App.css';
import { useState } from 'react';

const App = () => {
  // Ejercicio 1
  // const tasks = [
  //   'Comprar harina, jamón y pan rallado',
  //   'Hacer croquetas ricas',
  //   'Ir a la puerta de un gimnasio',
  //   'Comerme las croquetas mirando a la gente que entra en el gimnasio',
  // ];

  // Ejercicio 2
  // const tasks = [
  //   { task: 'Comprar harina, jamón y pan rallado', completed: true },
  //   { task: 'Hacer croquetas ricas', completed: true },
  //   { task: 'Ir a la puerta de un gimnasio', completed: false },
  //   { task: 'Comerme las croquetas mirando a la gente que entra en el gimnasio', completed: false },
  // ];

  // Ejercicio 1(leccion 3.4.2) ToDo list con los datos en el estado

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
  const renderTasks = () => {
    return tasks.map((task, index) => {
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
  return (
    <div className="App">
      <h1>Mi lista de tareas</h1>
      <ol>{renderTasks()}</ol>
    </div>
  );
};

export default App;
