//rafce te arma la estructura de abajo,, React arrow function export component default
//un componente de react exportado por defecto

import React, { useState } from 'react'

const EstadosScreen = () => {
    //ES una funcion que nos permite estados de react useState, es una funcion que devuelve un array con el valor de tu estado y una funcion de seteo 
    //useState => [stateValue, setState]
    //espera recibir el valor inicial de tu estado

    //REGLAS
    //NO se puede reasignar el valor de un estado directamente
    //Si queremos cambiar el valor de un estado, debemos usar SIEMPRE la funcion de SETEO
    //la FUNCION DE SETEO/SETTING recibe:
    //1. un valor que sera el nuevo valor del estado
    //2. proximamente..
    
    //la funcion de seteo hara que mi componente vuelva a cargarse

    //esto es un array
    const [contador, setContador] = useState(1)
    const [errorMinimoContador, setErrorMinimoContador] = useState(false)
    

    //la funcion setter puede recibir a una callback(funcion que se pasa como parametro de otra). El valor de retorno de la callback ES EL VALOR QUE TENDRA MI ESTADO
    //esa callback recibira un parametro con el valor del estado previo

    const incrementar = () => {
        //llamo a la funcion de seteo
        //FORMA CORREACTA
        setContador(( prevContadorState ) => {
            return prevContadorState + 1})
        setErrorMinimoContador(false)
    }
    const decrementar = () => {
        //esto es una mala practica, deberiamos hacer con prevState como arriba
        if(contador > 1){
            setContador(( prevState ) => {
                return prevState - 1})
        }
        else{
            setErrorMinimoContador(true)
        }
    }


    const handleShowHiddenText = () => {
        setIsHiddenText((prevHiddenTextState) => {
            return !prevHiddenTextState})
    }

    const [isHiddenText, setIsHiddenText] = useState(true)


    return (
        <div>
            <h1>Estados de React</h1>
            <div>
                <button onClick={decrementar}>Restar</button>
                <span>{contador}</span>
                <button onClick={incrementar}>Sumar</button>
                {errorMinimoContador && <span>ERROR, el valor no puede ser negativo</span>}
            </div>
            <div>
                <button onClick={handleShowHiddenText}>Abrir</button>
                {!isHiddenText && <span>TEXTO OCULTO</span>}

            </div>
        </div>
    )
}

export default EstadosScreen
