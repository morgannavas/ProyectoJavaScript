document.addEventListener('DOMContentLoaded', function manejarFormulario() {
            /*DATOS DE CONTACTO + SPANS DE ERRORES*/
            const nombre = document.getElementById('nombre')
            const nombreerror = document.getElementById('nombreerror')
    
            const apellidos = document.getElementById('apellidos')
            const apellidoerror = document.getElementById('apellidoerror')
    
            const telefono = document.getElementById('telefono')
            const telefonoerror = document.getElementById('telefonoerror')
    
            const email = document.getElementById('email')
            const emailerror = document.getElementById('emailerror')

            // Elementos del precio
            const radiobuttons = document.getElementsByName('tamano');
            const contador = document.getElementById('plazo');
            const checkbox_extras = document.getElementsByName('cbox[]');
            const productoerror = document.getElementById('productoerror');
            const precio_final_input = document.getElementById('precio_final');
            let precio_final = 0;



            /*POLITICA DE PRIVACIDAD boton*/
            const politica = document.getElementById('politica')
            const politicaerror = document.getElementById('politicaerror')

            /* Validar formulario */
        function validarFormulario() {
            /*Validar nombre*/
            if(nombre.value.trim() === ''){
                nombreerror.textContent = 'Debes completar este campo'
                return false
            } else if(!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{3,15}$/.test(nombre.value.trim())){
                nombreerror.textContent = 'El campo debe contener al menos 3 letras y no puede contener números'
                return false
            }else{nombreerror.textContent=''}
    
            /*Validar apellidos*/
            if(apellidos.value.trim() === ''){
                apellidoerror.textContent = 'Debes completar este campo'
                return false
            } else if(!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]{3,40}$/.test(apellidos.value.trim())){
                apellidoerror.textContent = 'El campo debe contener al menos 3 letras y no puede contener números'
                return false
            }else{apellidoerror.textContent=''}
    
            /*Validar telefono*/
            if(telefono.value.trim() === ''){
                telefonoerror.textContent = 'Debes completar este campo'
                return false;
            } else if(!/^\d{9}$/.test(telefono.value.trim())){
                telefonoerror.textContent = 'El campo debe contener exactamente 9 caracteres y no puede contener letras'
                return false;
            }else{telefonoerror.textContent=''}
            
            /*Validar email*/
            if(email.value.trim() === ''){
                emailerror.textContent = 'Debes completar este campo'
                return false;
            } else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email.value.trim())){
                emailerror.textContent = 'Por favor introduce un correo válido'
                return false;
            }else{emailerror.textContent=''}


        // Validacion 'producto'
        let seleccionado = false;
        for (let i = 0; i < radiobuttons.length; i++) {
            if (radiobuttons[i].checked) {
                seleccionado = true;
                break;
            }
        }
        if (!seleccionado) {
            productoerror.textContent = 'Debes seleccionar una opción de producto';
            return false;
        } else {
            productoerror.textContent = '';
        }

        // Validacion 'politica de privacidad'
        if(!politica.checked){
            politicaerror.textContent = 'Debes aceptar nuestra politica de privacidad para enviarnos tu pedido'
            return false
        }else{
            politicaerror.textContent = ''
        }

        return true;
    }
        //Estado de los inputs para que no se muestren los spans de error
        nombre.addEventListener('input', () => (nombreerror.textContent = ''));
        apellidos.addEventListener('input', () => (apellidoerror.textContent = ''));
        telefono.addEventListener('input', () => (telefonoerror.textContent = ''));
        email.addEventListener('input', () => (emailerror.textContent = ''));
        politica.addEventListener('change', () => (politicaerror.textContent = ''));


        //ACTUALIZAR PRECIO
    function actualizarPrecio() {
        precio_final = 0
        // Sumar el valor del producto seleccionado
        let radioischecked = false;
        for (let i = 0; i < radiobuttons.length; i++) {
            if (radiobuttons[i].checked) {
                precio_final += parseFloat(radiobuttons[i].value);
                radioischecked = true;
                break;
            }
        }

        // Sumar valores de los checkboxes estras
        for (let i = 0; i < checkbox_extras.length; i++) {
            if (checkbox_extras[i].checked) {
                precio_final += parseFloat(checkbox_extras[i].value);
            }
        }

        
        // Sumar valor del contador a precio final
        let valorContador = parseInt(contador.value) || 0;
        let valorAdicional = valorContador * 5;
        precio_final += valorAdicional

        //Evento change para evitar que se siga viendo el span de error de producto
for (let i = 0; i < radiobuttons.length; i++) {
     radiobuttons[i].addEventListener('change', () =>{
        productoerror.textContent = '';
        actualizarPrecio();
})
}
        //Evento change para que se sume al precio el valor de todas las checkboxes seleccionadas
for (let i = 0; i < checkbox_extras.length; i++) {
    checkbox_extras[i].addEventListener('change', actualizarPrecio);
}

//Actualizar el precio
precio_final_input.value = precio_final.toFixed(2);
}
    
    //Mandar la función al contador
    contador.addEventListener('input', actualizarPrecio);

    //Evento change para cuando se acepta la política de privacidad
    politica.addEventListener('change', () =>{
        if(!politica.checked){
            politicaerror.textContent = 'Debes aceptar nuestra politica de privacidad para enviarnos tu pedido'
            return false
        }else{
            politicaerror.textContent = ''
        }
    })

    //Función principal para el envío del formulario
    const formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', (event) => {
        if (!validarFormulario()) {
            event.preventDefault(); // Detener envío si no pasa validación
            
        }else{
            alert('Confirmamos el envío del formulario')
        }
    });

actualizarPrecio();
    
})
