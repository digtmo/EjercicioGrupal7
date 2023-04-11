function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;
    
    let camposVacios = [];
    
    if (nombre === "") {
      camposVacios.push("Nombre");
    }
    if (apellido === "") {
      camposVacios.push("Apellido");
    }
    if (email === "") {
      camposVacios.push("Email");
    }
    if (telefono === "") {
      camposVacios.push("Teléfono");
    }
    if (mensaje === "") {
      camposVacios.push("Mensaje");
    }

    console.log("Array camposVacios: ",camposVacios)
    
    if (camposVacios.length > 0) {
      let mensajeError = "Los siguientes campos están vacíos: " + camposVacios.join(", ");
      alert(mensajeError);
      return false;
    } 
    
    return true;
  }













/* const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const mensaje = document.getElementById('mensaje').value;


  if (nombre === '') {
     console.log("nombre esta vacio")
  } else {
    console.log("tiene valor")
  }

  if (apellido === '') {
    console.log(" apellido esta vacio")
 } else {
   console.log("apellido tiene valor")
 }
  
  if (nombre === '' || apellido === '' || email === '' || telefono === '' || mensaje === '') {
    alert('Por favor, rellene todos los campos del formulario.');
  } else {
    form.submit();
  }
});
 */