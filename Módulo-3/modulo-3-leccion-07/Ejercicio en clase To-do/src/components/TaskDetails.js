import { useState } from 'react';
import PropTypes from 'prop-types';

function TaskDetail(props) {
  const [styleTask, setStyleTask] = useState('pending');

  const clickTask = (ev) => {
    if (styleTask === 'done') {
      setStyleTask('pending');
    } else {
      setStyleTask('done');
    }
  };
  // setStyleTask(styleTask === 'done' ? 'pending' : 'done'); esto es igual que el if de arriba

  const styleDate = props.date <= 11 ? 'hurry' : ''; //hurry es una clase de css para que salga en rojo la fecha
  return (
    <div className={'list__item--details' + styleTask}>
      <input className="list__item--check" type="checkbox" onChange={clickTask} />
      <label htmlFor="t1">{props.subject}</label>
      <span className={'list__item--dueTo' + styleDate}>{props.date}</span>
    </div>
  );
}
TaskDetail.propTypes = {
  subjetc: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
};

export default TaskDetail;
