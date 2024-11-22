import React, { useContext } from "react";
import { WorkSpaceList } from "../Components";
import { Link } from "react-router-dom";
import workspaces from "../data/WorkSpacesData";
import { WorkspaceContext } from "../Contexts/WorkspaceContext";


const HomeScreen = () => {
    //Quiero obtener a valor
    const workspace_context_values = useContext(WorkspaceContext)//Me devolvera un objeto con el valor de mi contexto
    console.log(workspace_context_values)

    return (
        <div>
            <Link to={'/estados'}>Ir a estados</Link>
            <br/>
            <Link to={'/formularios'}>Ir a formularios</Link>
            <WorkSpaceList workspaces={workspaces} />
        </div>
    )
}

export default HomeScreen