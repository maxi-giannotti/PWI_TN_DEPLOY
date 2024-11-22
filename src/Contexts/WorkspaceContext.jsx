import { createContext } from "react";


//Creamos el contexto
export const WorkspaceContext = createContext()
export const WorkspaceContextProvider = ({children}) => {
    //aca vamos a tener toda la logica de aplicacion de mis workspaces
    let valor = 'pepe'
    return (
        <WorkspaceContext.Provider value={
                {
                    valor: valor,
                    numero_favorito: 8
                }
            }>
            {children}
        </WorkspaceContext.Provider>
    )
}