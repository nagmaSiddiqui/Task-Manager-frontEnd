import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@mui/material";

import api from "../api";

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await api.get(`/${id}`);
        setTask(response.data);
      } catch (error) {
        console.error("Error fetching task:", error);
      }
    };

    fetchTask();
  }, [id]);

  if (!task) return <div>Loading...</div>;

  return (
    <div>
      <h1>{task.title}</h1>
      <p>{task.description}</p>
      <p>Due Date: {task.dueDate}</p>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`/edit/${task._id}`}
      >
        Edit
      </Button>
    </div>
  );
};

export default TaskDetail;
