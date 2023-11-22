import { useContext, useState } from "react";
import { UserContext } from "./providers/UserContext"
import { NavBar } from './components/NavBar/NavBar'
import { TaskContainer } from './container/TaskContainer'
import { LoginContainer } from "./container/LoginContainer";
import { findUserByUsernameAndPassword } from "./Database/Database";

function App() {
  const { user, loginUser } = useContext(UserContext);
  const [userLogin, setUserLogin] = useState({
    username: '',
    password: ''
  })

  const handleSubmitUser = (event) => {
    event.preventDefault();
    const userLogged = findUserByUsernameAndPassword(userLogin.username, userLogin.password);
    console.log(userLogged)
    if (userLogged) {
      loginUser(userLogged)
    }
  }


  const handleInputUserLogin = (event) => {
    setUserLogin({ ...userLogin, [event.target.name]: event.target.value })
  }

  // const handleLogin = (authAuser) => {
  //   loginUser(authAuser);
  // };

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
