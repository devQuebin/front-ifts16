console.log("testing message msg");
// Seleccionamos el botón y el body
const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

// Verificamos si el usuario ya tenía el dark mode activado (guardado en localStorage)
if (localStorage.getItem("dark-mode") === "enabled") {
  body.classList.add("dark-mode");
}

// Función para alternar entre light mode y dark mode
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Guardamos la preferencia del usuario en localStorage
  if (body.classList.contains("dark-mode")) {
    localStorage.setItem("dark-mode", "enabled");
  } else {
    localStorage.setItem("dark-mode", "disabled");
  }
});
