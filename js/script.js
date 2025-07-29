
document.addEventListener("DOMContentLoaded", function () {
    const nivelSelect = document.getElementById("nivel");
    const objetivoSelect = document.getElementById("objetivo");
    const botao = document.getElementById("verPlano");
    const resultado = document.getElementById("resultado");
  
    botao.addEventListener("click", function () {
      const nivel = nivelSelect.value;
      const objetivo = objetivoSelect.value;
  
      if (!nivel || !objetivo) {
        resultado.innerHTML = "<p>Por favor, selecione o nível e o objetivo.</p>";
        return;
      }
  
      const planoURL = `planos/${nivel}_${objetivo}.pdf`;
  
      resultado.innerHTML = `<p>O plano ideal para si é:</p>
      <a href="${planoURL}" target="_blank" download>Ver Plano</a>`;
      

    });
    const menuToggle = document.querySelector('.menu-toggle');
const menuClose = document.querySelector('.menu-close');
const menu = document.querySelector('.menu');

menuToggle.addEventListener('click', () => {
  menu.classList.add('active');
  menuToggle.style.display = 'none';
  menuClose.style.display = 'block';
});

menuClose.addEventListener('click', () => {
  menu.classList.remove('active');
  menuToggle.style.display = 'block';
  menuClose.style.display = 'none';
});

});
    