import { UserProvider } from "./providers/UserContext";
import App from "./App";

function AppRe() {
  return (
    <UserProvider>
      <App />
    </UserProvider>

  )
}

export default AppRe
