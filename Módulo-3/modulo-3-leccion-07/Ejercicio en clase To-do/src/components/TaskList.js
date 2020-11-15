import TaskDetail from './TaskDetails';
import PropTypes from 'prop-types';

function TaskList(props) {
  const htmlList = props.list.map((eachTask, i) => (
    <li key={i} className="list__item">
      <TaskDetail id={i} subject={eachTask.subject} date={eachTask.date}></TaskDetail>
    </li>
  ));

  return <ul className="list">{htmlList}</ul>;
}
TaskList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default TaskList;
