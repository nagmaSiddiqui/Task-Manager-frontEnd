import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, List, ListItem, ListItemText } from "@mui/material";

import api from "../api";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/");
        setTasks(response.data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  const deleteTask = async (id) => {
    try {
      await api.delete(`/${id}`);
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (error) {
      console.error("Error deleting task:", error);
      // Optionally, handle error state or show an alert to the user
    }
    navigate("/");
  };

  return (
    <div>
      <h1>Task List</h1>
      <Button variant="contained" color="primary" component={Link} to="/new">
        Add Task
      </Button>
      <List>
        {tasks.map((task) => (
          <ListItem
            key={task._id}
            button
            component={Link}
            to={`/task/${task._id}`}
          >
            <ListItemText primary={task.title} />
            <ListItemText primary={task.description} />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deleteTask(task._id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TaskList;
