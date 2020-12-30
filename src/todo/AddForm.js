
import React, { useState } from 'react';

const AddForm = ({addTodo}) => {
  const [task, setTask] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask('');
  }

  return (
    <React.Fragment>
      <form onSubmit={submitForm}>
        <input 
          className="input"
          type="text"
          value={task}
          placeholder="Add to do task"
          onChange={e => setTask(e.target.value)}
        />
        <button type="submit" value="Submit" className="submit">Submit</button>
      </form>
    </React.Fragment>
  );
}

export default AddForm;
