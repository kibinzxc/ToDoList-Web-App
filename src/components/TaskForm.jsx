import React, { useState } from "react";

import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = () => {
  const [taskData, settaskData] = useState({
    task: "",
    status: "todo",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    settaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
  };

  // const [task, setTask] = useState("");
  // const [status, setStatus] = useState("todo");

  // const handleTaskChange = (e) => {
  //   setTask(e.target.value);
  // };

  // const handleStatusChange = (e) => {
  //   setStatus(e.target.value);
  // };

  return (
    <header className='app_header'>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='task'
          className='task_input'
          placeholder='Enter your task'
          onChange={handleChange}
        />
        <div className='task_form_bottom_line'>
          <div>
            <Tag tagName='HTML' />
            <Tag tagName='CSS' />
            <Tag tagName='JavaScript' />
            <Tag tagName='React' />
          </div>

          <div>
            <select
              name='status'
              className='task_status'
              onChange={handleChange}
            >
              <option value='todo'>To Do</option>
              <option value='doing'>In Progress</option>
              <option value='done'>Done</option>
            </select>
            <button type='submit' className='task_submit'>
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
