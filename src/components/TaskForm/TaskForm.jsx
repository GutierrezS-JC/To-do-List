export const TaskForm = ({ handleCloseForm, handleSubmitTask, handleTaskFormChange }) => {
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1"
      aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{ backgroundColor: "var(--bs-modal-bg)" }}>
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">Nueva tarea</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseForm} />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="title" className="col-form-label">Titulo:</label>
                <input type="text" className="form-control" id="title" name="title" onChange={handleTaskFormChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="col-form-label">Descripcion:</label>
                <textarea className="form-control" id="description" name="description" onChange={handleTaskFormChange} />
              </div>
            </form>

          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCloseForm}>Cerrar</button>
            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmitTask}>Agregar tarea</button>
          </div>
        </div>
      </div>
    </div>
  )
}