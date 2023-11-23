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

  const [editTaskId, setEditTaskId] = useState(null)
  const [loading, setLoading] = useState(true)
  const [taskList, setTaskList] = useState([]);
  const [taskForm, setTaskForm] = useState({
    id: '',
    title: '',
    description: '',
    isCompleted: false,
  })

  useEffect(() => {
    getAllTasks();
  }, [])

  const getAllTasks = async () => {
    try {
      const tasks = await axios.get(`${URL_BASE}/tasks?userId=${user.id}&_sort=createdAt&_order=desc`)
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
    setEditTaskId(null)
  }

  const handleTaskFormChange = (e) => {
    // TODO: Add verification
    setTaskForm({ ...taskForm, [e.target.name]: e.target.value })
  }

  const handleEdit = async (event) => {
    event.preventDefault();
    try {
      const editTask = {
        id: editTaskId,
        title: taskForm.title,
        description: taskForm.description,
      }
      await axios.patch(`${URL_BASE}/tasks/${editTaskId}`, editTask)
      handleCloseForm()
      getAllTasks()
    }
    catch (err) {
      console.log(err)
    }
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
          <TaskForm handleCloseForm={handleCloseForm} handleSubmitTask={handleSubmitTask} 
            handleTaskFormChange={handleTaskFormChange} handleEdit={handleEdit} editTaskId={editTaskId} />
          <TaskList taskList={taskList} deleteTask={deleteTask} taskCompleted={taskCompleted} setEditTaskId={setEditTaskId} />
        </>
      }
    </>
  )
}