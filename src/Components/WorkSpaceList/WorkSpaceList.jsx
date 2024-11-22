import React from 'react'
import './WorkSpaceList.css'
import WorkSpaceItem from '../WorkSpaceItem/WorkSpaceItem'

const WorkSpaceList = ({workspaces}) => {
    let workspacesListJSX = workspaces.map(
        (workspace)=>{
            return<WorkSpaceItem 
            title={workspace.title} 
            id={workspace.id} 
            miembros={workspace.miembros} 
            img={workspace.img}
            key={workspace.id}/>
        }
    )
    return (
        <div className='list'>
            <h1>Tus espacios de trabajo</h1>
            <div>
                {workspacesListJSX}
            </div>
        </div>
    )
}

export default WorkSpaceList 