window.onload = () => {
    document.querySelector("#btn").addEventListener("click", () => {
      document.querySelector("#excuse").innerHTML = GeneratorExcuse();
    });
    console.log("Hello Rigo from the console!");
  };
  
let GeneratorExcuse = () => {
 let prono = ["mi", "tu", "el"];
 let quien = ["Abuela", "Vecina", "Perro", "Gato", "Profesor"];
 let accion = ["robo", "tiró", "rompió", "estropeó"];
 let que = ["ordenador", "trabajo", "carpeta", "apuntes"];

 let pronoIndex = Math.floor(Math.random() * prono.length); 
 let quienIndex = Math.floor(Math.random() * quien.length);
 let accionIndex = Math.floor(Math.random() * accion.length);
 let queIndex = Math.floor(Math.random() * que.length);

return (
  prono[pronoIndex] + " " + quien[quienIndex] + " " + accion[accionIndex] + " " + prono[pronoIndex] + " " + que[queIndex]);
};
