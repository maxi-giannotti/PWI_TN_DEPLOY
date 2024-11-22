const extractFormData = (form_jsx) => {
    const form_data = new FormData(form_jsx) 

        //obtener el valor de algun campo de mi formulario
        //console.log(form_data.get('nombre'))

        //const nombre = form_data.get('nombre')

        const form_keys = form_data.keys().toArray()


        //creamos un objeto para ir llenando con los valores y los campos
        const form_values = {}

        for(let key of form_keys){
            form_values[key] = form_data.get(key)
        }
        return form_values
}
export default extractFormData