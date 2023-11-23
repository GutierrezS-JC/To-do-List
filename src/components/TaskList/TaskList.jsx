import { TaskItem } from "../TaskItem/TaskItem";

export const TaskList = ({ taskList, editTask, deleteTask, taskCompleted, setEditTaskId }) => {
  return (
    <div className="task-list-container">
      <h1 style={{ color: "white" }}>Lista de tareas</h1>
      <div style={{ marginBottom: '1.2em' }}>
        <button className="btn btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
          Agregar nueva tarea
        </button>
      </div>
      {taskList &&
        <div className="cards-list" style={{marginBottom:'2.5em'}}>
          {taskList.length > 0 && taskList.map((task) => (
            <TaskItem key={`Task-${task.id}`} task={task} editTask={editTask}
              deleteTask={deleteTask} taskCompleted={taskCompleted} setEditTaskId={setEditTaskId} />
          ))}
        </div>
      }
    </div>
  )
}