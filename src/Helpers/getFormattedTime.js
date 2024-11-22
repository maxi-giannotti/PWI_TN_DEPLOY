

/** 
* Obtiene la fecha actual en formato min:horas dias/meses
*/
export const getFormattedDateMMHHDDMM = () => {
    //crear un objeto Date con la fecha actual, un objeto date es un objeto que nos permite manipular las fechas
    const fecha_actual = new Date()
    return `${fecha_actual.getHours()}:${fecha_actual.getMinutes()} ${fecha_actual.getDate()}/${fecha_actual.getMonth() + 1}`
}
