// declaro todas las variables, en estas guardo la informacion para llamar a los elementos del html

const button = document.querySelector("button");
const inputColor = document.querySelector(".input");
const textHexa = document.querySelector("#codigoHexa");
const areaColor = document.querySelector(".areaColor");
const icon = document.querySelector(".far");
const hexaSpan = document.querySelector(".hexa");
const body = document.querySelector("body");

// le agrego al boton un evento click, cada ves que se presione el boton se ejecuta los siguientes codigos

button.addEventListener("click", () => {
  /*le doy contenido con textContent y lo hago dinamico al igualarlo al inputColor con su propiedad value,
  con la propiedad value ingreso al valor del input, el codigo hexadecimal se va a modificar de manera dinamica cada vez que se elija un nuevo color en el input y presione el boton de visulaizar*/

  textHexa.textContent = `Codigo Hexadecimal : ${inputColor.value}`;

  /*al area de muestra de color le agrego su background de forma dinamica al igualarlo al inputColor y su propiedad value*/

  areaColor.style.backgroundColor = inputColor.value;
  areaColor.style.borderColor = inputColor.value;

  /*lo mismo hago con el boton, el icono y el body, le agrego estilos, con la propiedad .style, de color de forma dinamica al igualarlo al inputColor*/

  button.style.borderColor = inputColor.value;
  icon.style.color = inputColor.value;

  body.style.backgroundColor = inputColor.value;
});

// le agrego un evento click al icono para que se copie al portapapeles
icon.addEventListener("click", () => {
  // codigo para copiar al portapapeles
  navigator.clipboard
    .writeText(inputColor.value)
    .then(() => console.log("texto copiado"))
    .catch((e) => console.log(e));
});
