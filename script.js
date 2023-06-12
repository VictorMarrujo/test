document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evitar que se envíe el formulario

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Aquí debes realizar una solicitud HTTP a tu servidor para verificar los datos en la base de datos
  // Puedes usar XMLHttpRequest o fetch, similar a los ejemplos anteriores

  // Supongamos que recibimos una respuesta del servidor en formato JSON
  var response = {
    success: true,
    message: "Inicio de sesión exitoso"
  };

  if (response.success) {
    document.getElementById("message").textContent = response.message;
    // Redirigir a otra página o realizar alguna acción adicional
  } else {
    document.getElementById("message").textContent = response.message;
  }
});

document.getElementById("darkModeToggle").addEventListener("change", function() {
  document.body.classList.toggle("dark-mode");
});
