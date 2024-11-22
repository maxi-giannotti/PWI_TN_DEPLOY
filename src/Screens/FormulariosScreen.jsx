import React, { useState } from 'react'
import extractFormData from '../Helpers/extractFormData'
import { getFormattedDateMMHHDDMM } from '../Helpers/getFormattedTime'

const FormulariosScreen = () => {

    //creamos un estado que empieza como array vacio
    const [usuarios, setUsuarios] = useState([])

    //estado de errores, es una representacion de objetos de mi formulario
    const [errors, setErrors] = useState({nombre: null, contraseña: null})

    //pregunta tecnica: si yo hago un push osea agrego un elemento al array, que pasara?Se imprime en pantalla

    //Queres controlar los inputs o preferis esperar a que el usuario envie el formulario

    //no controlar gasta menos recursos

    const handleSubmitUncontrolledForm = (evento) => {
        evento.preventDefault()
        //el preventdefault es necesario hacer cada vez que se pone un formulario para prevenir qeu se recargue la pag
        //El evento es un objeto con datos del evento en particular

        //el target de un evento es el elemento html que emitio dicho evento
        const form_jsx = evento.target

        //FormData me devuelve un objeto con el que puedo manipular mi formulario
        
        const nuevo_usuario = extractFormData(form_jsx)

        const errores_formularios = {nombre: null, contraseña: null}

        //me sirve para marcar si hay algun error de validacion en mi formulario
        let hayErrores = false

        if (!nuevo_usuario.nombre) {

            //no hubo nombre, entonces quiero cambiar mi estado de errores para que haya un error en nombre
            /* setErrors(( prevStateErrors )=>{
                return {...prevStateErrors, nombre: 'Falta un nombre'}
            }) */
            errores_formularios.nombre = 'falta un nombre'
            hayErrores = true
        }
        
        if (!nuevo_usuario.contraseña){
            /* setErrors(( prevStateErrors )=>{
                return{...prevStateErrors, contraseña: 'Falta una contraseña'}}) */
            errores_formularios.contraseña = 'falta una contraseña'
            hayErrores = true
        }

        //seteamos que los errores se guarden en el estado de errores
        setErrors(errores_formularios)

        if (!hayErrores) {
            setErrors({nombre: null, contraseña: null})
            nuevo_usuario.hora_creacion = getFormattedDateMMHHDDMM()

        //agregar a mi estado el nuevo usuario
        //const usuarios2 = usuarios
        //usuarios2.push(nuevo_usuario)  ESTA MAAAL

        //esto es mejor
        setUsuarios(
            (prevUsuariosState)=>{
                return[...prevUsuariosState, nuevo_usuario]}
        )

        console.log('formulario enviado')
        }
    }
    console.log(usuarios)
    return (
    <div>
        <h1>Formularios en React</h1>
        <form onSubmit={handleSubmitUncontrolledForm}>
            <label htmlFor='nombre'>Ingrese su nombre</label>
            <br/>
            <input type='nombre' id='nombre' name='nombre'/>
            {errors.nombre && <span style={{color: 'red'}}>{errors.nombre}</span>}
            <br/>
            <br/>

            <label htmlFor='contraseña'>Ingrese su contraseña</label>
            <br/>
            <input type='contraseña' id='contraseña' name='contraseña'/>
            {errors.contraseña && <span style={{color: 'red'}}>{errors.contraseña}</span>}

        <br/>
            <button type='submit'>Confirmar</button>
        </form>
        <UsersList users={usuarios}/>
    </div>
    )
}

const UsersList = ({users}) => {
    return (
        <div>
            {users.map(user => {
                return <UserCard nombre={user.nombre} contraseña={user.contraseña}/>
            })}
        </div>
    )
}
const UserCard = ({nombre, contraseña,}) => {
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <h2>Contrasenia: {contraseña}</h2>
        </div>
    )
}

export default FormulariosScreen