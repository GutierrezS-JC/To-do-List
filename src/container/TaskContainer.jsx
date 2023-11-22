import { useState, useEffect } from "react"
import { TaskList } from "../components/TaskList/TaskList";
import { useContext } from "react";
import { UserContext } from "../providers/UserContext"
import { getTasks, addTasks, editTaskById, markAsCompleted, deleteTaskById } from "../Database/Database";

export const TaskContainer = () => {
  const { user } = useContext(UserContext);

  const [taskList, setTaskList] = useState();
  const [taskForm, setTaskForm] = useState({
    title: '',
    description: '',
    isCompleted: false,
    idUser: 1
  })

  const [editTaskForm, setEditTaskForm] = useState({
    idTask: '',
  })

  useEffect(() => {
    getAllTasks();
  }, [])

  const getAllTasks = async () => {
    try {
      const tasks = await getTasks();
      setTaskList(tasks)
    }
    catch (err) {
      console.log(err)
    }
  }

  const addTask = (event) => {
    event.preventDefault();
    //Add verification

    const newTask = JSON.stringify({
      title: taskForm.title,
      description: taskForm.description,
      isCompleted: taskForm.isCompleted,
      idUser: taskForm.idUser
    })
    addTasks(newTask);
  }

  const editTask = (idTask) => {
    editTaskById(idTask, userLogged.id);
    getAllTasks()
  }

  const deleteTask = (idTask, idUser) => {
    deleteTaskById(idTask, idUser)
    getAllTasks()
  }

  const taskCompleted = (idTask) => {
    console.log("Metodo --> Task ID: " + idTask + " " + "User ID: " + user.id)
    const updatedTasks = markAsCompleted(+idTask, +user.id)
    setTaskList(updatedTasks)
  }

  return (
    <TaskList taskList={taskList} addTask={addTask} editTask={editTask}
      deleteTask={deleteTask} taskCompleted={taskCompleted} />
  )
}