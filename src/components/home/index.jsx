import { useState } from "react";
import "./home.css";
import Display from "../display";

function Home() {
  const [name, setName] = useState("");
  const [taskInfo, setTaskInfo] = useState([]);

  const addTask = () => {
    if (name.trim() !== "") {
      setTaskInfo([...taskInfo, { text: name, completed: false }]);
      setName("");
    }
  };

  const clearTasks = () => {
    setTaskInfo([]);
  };

  return (
    <div className="layout">
      <div className="container">
        <h1>Todo</h1>
        <div className="getdata">
          <div className="inputbtn">
            <input
              className="homein"
              type="text"
              name="tasks"
              id="tasks"
              placeholder="Enter task information: "
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <button onClick={addTask} className="addBtn">
              Add Task
            </button>
          </div>
          <button onClick={clearTasks} className="clrBtn">
            Clear All Tasks
          </button>
        </div>
        <div className="displaydata">
          {taskInfo.length > 0 ? (
            taskInfo.map((task, index) => (
              <Display
                key={index}
                task={task}
                taskInfo={taskInfo}
                setTaskInfo={setTaskInfo}
                index={index}
              />
            ))
          ) : (
            <p
              style={{
                textAlign: "center",
                marginTop: "10px",
                fontSize: "1.6rem",
              }}
            >
              No tasks pending!
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
