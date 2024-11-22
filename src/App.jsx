import React from "react"
import './global.css'
import { Route, Routes } from "react-router-dom"
import HomeScreen from "./Screens/HomeScreen"
import WorkSpaceScreeen from "./Screens/WorkSpaceScreen"
import EstadosScreen from "./Screens/EstadosScreen"
import FormulariosScreen from "./Screens/FormulariosScreen"

function App() {


  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/home" element={<HomeScreen/>}/>
        <Route path="/workspace/:workspace_id" element={<WorkSpaceScreeen/>}/>
        {/* esos dos puntos indica que ese valor de la ruta es un parametro de busqueda */}
        <Route path="/prueba" element={<h1>Hola soy la prueba</h1>}/>
        <Route path="/estados" element={<EstadosScreen/>}/>
        <Route
          path="/formularios"
          element={<FormulariosScreen/>}/>
      </Routes>
    </div>
  )
}

export default App
