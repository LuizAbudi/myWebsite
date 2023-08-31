const typeElements = document.querySelectorAll(".animation h2, .animation p");
const textToType = [
  "Olá, meu nome é Luiz Gustavo.",
  "Atualmente sou estudante de Ciências da Computação da UTFPR-Campo Mourão. Estudei durante 5 períodos o curso de Engenharia da Computação na UTFPR-Apucarana.",
  "Atualmente estou estagiando em uma empresa de desenvolvimento de Software, adquirindo conhecimentos de front-end e back-end",
];
let elementIndex = 0;
let charIndex = 0;

function typeCharacter() {
  if (elementIndex < textToType.length) {
    if (charIndex < textToType[elementIndex].length) {
      typeElements[elementIndex].textContent +=
        textToType[elementIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeCharacter, 50); // Controla a velocidade da animação
    } else {
      charIndex = 0;
      elementIndex++;
      if (elementIndex < textToType.length) {
        setTimeout(typeCharacter, 400); // Pausa entre parágrafos ou títulos
      } else {
        typeElements[elementIndex - 1].classList.remove("blinking");
        typeElements[elementIndex - 1].style.borderRight = "none";
      }
    }
  }
}

typeCharacter();
