import React from "react"
import { useParams } from "react-router-dom"
import workspaces from "../data/WorkSpacesData"


//la sintaxis de un find es lista.find((element)=>{return elemento.nombre=='pepe'})
//si la callback devuelve verdadero, find dejara de buscar y retornara el elemnto que coincida con esa condicion, si no encuentra a ningun elemento que coincida, devolvera UNDEFINED

const WorkSpaceScreeen = () => {
    //recupera paramtros de busqueda, devuelve un objeto con los parametros de busqueda de esa url
    const {workspace_id} = useParams()
    
    //como buscarian el workspace por id?
    const workspace_found = workspaces.find((workspace)=>{
        return workspace.id == workspace_id
    })
    console.log(workspace_found)
    //const workspace_id = params.workspace_id
    return(
        <div>
            <h1>{workspace_found.title}</h1>
            <div>
                <MessagesList messages={workspace_found.messages}/>
            </div>
        </div>
    )
}

const MessagesList = ({messages}) => {
    return (
        messages.map(message => {
            return <Message key={message.id} texto={message.texto} autor={message.autor} id={message.id} hora={message.hora}/>
        })
    )
}

const Message = ({texto, autor, id, hora}) => {
    return(
        <div>
            <h3>{autor}</h3>
            <p>{texto}</p>
            <span>Hora: {hora}</span>
            <hr />
        </div>
    )
} 

export default WorkSpaceScreeen 