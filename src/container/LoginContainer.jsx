export const LoginContainer = ({ handleSubmitUser, handleInputUserLogin }) => {
  return (
    <form onSubmit={handleSubmitUser}>
      <div className="task-list-container">
        <h1 style={{ color: "white", marginBottom: '.5em' }}>Bienvenido</h1>
        <div style={{ minWidth: '30em', maxWidth: '30em' }}>
          <label htmlFor="username" className="form-label" style={{ color: "white" }}>Nombre de usuario</label>
          <input className="form-control" id="username" name="username" type="text" aria-label="default input example" onChange={handleInputUserLogin} />

          <label htmlFor="password" className="form-label" style={{ color: "white", marginTop: '.3em' }}>Contraseña</label>
          <input type="password" id="password" name="password" className="form-control" aria-describedby="passwordHelpBlock" onChange={handleInputUserLogin} />
          <div style={{ marginTop: '1.2em' }}>
            <button className="btn btn-light" type="submit">Iniciar sesion</button>
          </div>
        </div>
      </div>
    </form>
  )
}