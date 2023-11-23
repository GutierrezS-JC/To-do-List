import { useContext, useState } from "react";
import { UserContext } from "./providers/UserContext"
import { NavBar } from './components/NavBar/NavBar'
import { TaskContainer } from './container/TaskContainer'
import { LoginContainer } from "./container/LoginContainer";
import { findByUsernameAndPassword } from "./components/utils/utils";
import axios from "axios";

function App() {
  const URL_BASE = "http://localhost:3000";

  const { user, loginUser } = useContext(UserContext);
  const [userLogin, setUserLogin] = useState({
    username: '',
    password: ''
  })

  const handleSubmitUser = async (event) => {
    event.preventDefault();
    const usersFetch = await getAllUsers();
    const userLogged = findByUsernameAndPassword(usersFetch, userLogin.username, userLogin.password);
    if (userLogged) {
      loginUser(userLogged)
    }
  }

  const handleInputUserLogin = (event) => {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value })
  }

  const getAllUsers = async () => {
    try {
      const users = await axios.get(`${URL_BASE}/users`)
      return users.data
    }
    catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <NavBar />
      <div className="container">
        {user
          ? <TaskContainer />
          : <LoginContainer handleSubmitUser={handleSubmitUser} handleInputUserLogin={handleInputUserLogin} />
        }
      </div>
    </>
  )
}

export default App
