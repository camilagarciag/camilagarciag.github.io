let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #1c8080;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #1c8080;">Soy estudiante de Ingeniería en Mecatrónica en la UANL</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
