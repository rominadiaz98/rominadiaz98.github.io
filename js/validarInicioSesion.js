
// Obtengo los elementos
document.getElementById('formulario').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var errorMail = document.getElementById('errorMail');
    var errorPassword = document.getElementById('errorPassword');
    var isValid = true;

    // Valido correo electrónico
    if (!email) {
      event.preventDefault(); // Evito que se refresque la página
      errorMail.textContent = 'El correo es obligatorio.';
      isValid = false;
    } else {
      errorMail.textContent = '';
    }

    // Valido contraseña
    if (!password) {
      event.preventDefault(); // Evito que se refresque la página
      errorPassword.textContent = 'La contraseña es obligatoria.';
      isValid = false;
    } else {
      errorPassword.textContent = '';
    }

  });