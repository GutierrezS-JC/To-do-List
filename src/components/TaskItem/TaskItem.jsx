export const TaskItem = ({ task, editTask, deleteTask, taskCompleted, setEditTaskId }) => {
  return (
    <div className="card card-task">
      <h5 className="card-header" style={{ fontSize: 'small', color: '#bcbcbc' }}>Creado el {task.createdAt}</h5>
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{task.description}</p>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <div>
            <button className="btn btn-light btn-sm me-2" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
              onClick={() => setEditTaskId(task.id)}>Editar</button>
            {!task.isCompleted
              ? <button className="btn btn-success btn-sm" onClick={() => taskCompleted(task.id, task.isCompleted)}>Completado</button>
              : <button className="btn btn-warning btn-sm" onClick={() => taskCompleted(task.id, task.isCompleted)}>No completado</button>
            }
          </div>
          <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
      </div>
    </div>
  )
}