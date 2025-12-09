import Header from '../../components/header/Header.jsx'
import LogIn from '../../components/header/logInForm/LogIn.jsx'
import './App.css'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
    <Header headers={[{ title: "Home", url: "/" }
      , { title: "FlexBox", url: "/flex" }
      , { title: "Grid", url: "/grid" }
      , { title: "Grid Cheat Sheet", url: "/gridcheatsheet" }
    ]}
       />
      <Outlet />
    </>
  )
}

export default App
