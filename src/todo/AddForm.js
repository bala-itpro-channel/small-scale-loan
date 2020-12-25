
import React, { useState } from 'react';

const AddForm = ({addTodo}) => {
  const [task, setTask] = useState('');
  const submitForm = (e) => {
    e.preventDefault();
    addTodo(task);
    setTask('');
  }

  return (
    <form onSubmit={submitForm}>
      <input 
        className="input"
        type="text"
        value={task}
        placeholder="Add to do task"
        onChange={e => setTask(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default AddForm;
