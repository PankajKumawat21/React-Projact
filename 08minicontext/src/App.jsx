import './App.css'
import Login from './component/Login'
import Profile from './component/Profile'
import UserContextProvider from './context/Usercontextprovider'

function App() {


  return (
    <UserContextProvider>
      <h1>React with Pankaj</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App