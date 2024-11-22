import React from 'react'
import'./WorkSpaceItem.css'
import { Link } from 'react-router-dom'


//el key es una propiedad reservada, solo react puede usarlo
const WorkSpaceItem = ({img, title, miembros, id}) => {
    return(
        <div className="workspace">
            
            <img src={img}/>
            <h2>{title}</h2>
            <span>Hay {miembros.length} miembros</span>
            <Link to={'workspace/' + id}>Ir a el espacio de trabajo</Link>
        </div>
    )
}
//SPA single page application
export default WorkSpaceItem