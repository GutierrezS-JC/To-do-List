import { useState, useEffect } from "react"
import { TaskList } from "../components/TaskList/TaskList";
import { useContext } from "react";
import { UserContext } from "../providers/UserContext"
import { LoadingSpinner } from "../components/LoadingSpinner/LoadingSpinner";

import axios from "axios";
import { TaskForm } from "../components/TaskForm/TaskForm";

export const TaskContainer = () => {
  const URL_BASE = "http://localhost:3000";

  const { user } = useContext(UserContext);

  const [loading, setLoading] = useState(true)
  const [taskList, setTaskList] = useState([]);
  const [taskForm, setTaskForm] = useState({
    title: '',
    description: '',
    isCompleted: false,
  })

  const [editTaskForm, setEditTaskForm] = useState({
    idTask: '',
  })

  useEffect(() => {
    getAllTasks();
  }, [])

  const getAllTasks = async () => {
    try {
      const tasks = await axios.get(`${URL_BASE}/tasks`)
      setTaskList(tasks.data)
      setLoading(false)
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleSubmitTask = async (event) => {
    event.preventDefault();
    // TODO: Add verification
    try {
      const newTask = {
        title: taskForm.title,
        description: taskForm.description,
        isCompleted: taskForm.isCompleted,
        createdAt: new Date().toLocaleDateString('es-AR'),
        userId: user.id
      }

      await axios.post(`${URL_BASE}/tasks`, newTask)
      handleCloseForm()
      getAllTasks()
    }
    catch (err) {
      console.log(err)
    }
  }

  const handleCloseForm = () => {
    setTaskForm({
      title: '',
      description: '',
      isCompleted: false,
    })
  }

  const handleTaskFormChange = (e) => {
    // TODO: Add verification
    setTaskForm({ ...taskForm, [e.target.name]: e.target.value })
  }

  const editTask = (idTask) => {
    getAllTasks()
  }

  const deleteTask = async (idTask) => {
    try {
      await axios.delete(`${URL_BASE}/tasks/${idTask}`)
      getAllTasks()
    }
    catch (err) {
      console.log(err)
    }
  }

  const taskCompleted = async (idTask, isCompletedReq) => {
    try {
      await axios.patch(`${URL_BASE}/tasks/${idTask}`, { isCompleted: !isCompletedReq })
      getAllTasks()
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      {loading
        ? <LoadingSpinner loading={loading} />
        : <>
          <TaskForm handleCloseForm={handleCloseForm} handleSubmitTask={handleSubmitTask} handleTaskFormChange={handleTaskFormChange} />
          <TaskList taskList={taskList} editTask={editTask} deleteTask={deleteTask} taskCompleted={taskCompleted} />
        </>
      }
    </>
  )
}