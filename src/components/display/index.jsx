import { useState } from "react";
import "./display.css";

function Display({ task, taskInfo, setTaskInfo, index }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newData, setNewData] = useState(task.text);

  const toggleComplete = () => {
    const updatedTasks = [...taskInfo];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTaskInfo(updatedTasks);
  };

  const deleteTask = () => {
    const updatedTasks = taskInfo.filter((_, i) => i !== index);
    setTaskInfo(updatedTasks);
  };

  const saveTask = () => {
    if (newData.trim() !== "") {
      const updatedTasks = [...taskInfo];
      updatedTasks[index].text = newData;
      setTaskInfo(updatedTasks);
      setIsEditing(false);
    }
  };

  return (
    <div>
      {!isEditing ? (
        <div className="block">
          <div className="row">
            <h4
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              Task: {task.text}
            </h4>
            <button onClick={toggleComplete} className="btns">
              {task.completed ? "Undo" : "Complete"}
            </button>
          </div>
          <div className="btnblock">
            <button onClick={() => setIsEditing(true)} className="btns">
              Edit
            </button>
            <button className="btns" onClick={deleteTask}>
              Delete
            </button>
          </div>
        </div>
      ) : (
        <div className="edit-section">
          <input
            className="editInput"
            type="text"
            placeholder="Edit task"
            value={newData}
            onChange={(e) => setNewData(e.target.value)}
          />
          <div className="btnblock">
            <button onClick={saveTask} className="btns">
              Save
            </button>
            <button onClick={() => setIsEditing(false)} className="btns">
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Display;
