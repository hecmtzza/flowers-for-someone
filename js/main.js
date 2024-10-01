onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Te he escrito mucho estos días, solo no quiero que se llegue a una costumbre y por eso prefiero no darte aquello que escribo. Esto es una recapitulación de esas pequeñas cosas que escribí, no sin antes aprovechar para decirte que me siento pleno, me sorprende cómo es posible vivir tanto en tan poco, sentir nuevas cosas, encontrar una persona tan fuera de lo común.').split('');
    const titleElement = document.getElementById('title');
    let index = 0;
    let currentText = '';
    const maxLength = 50; // Máximo número de caracteres visibles por bloque
    let showingText = false; // Controla si las letras están mostrándose una por una

    function appendTitle() {
      if (index < titles.length) {
        currentText += titles[index]; // Añade letra a letra al texto visible
        index++;

        titleElement.innerHTML = currentText;

        if (currentText.length >= maxLength && titles[index - 1] === ' ') {
          showingText = false; // Detiene cuando se llega a un bloque de palabras completo
        } else {
          setTimeout(appendTitle, 90); // Muestra letra por letra cada 50ms
        }
      }
    }

    function onContinue() {
      if (!showingText) {
        titleElement.innerHTML = ''; // Borra el texto anterior
        currentText = ''; // Reinicia el texto visible
        showingText = true; // Permite mostrar el siguiente bloque de texto
        appendTitle(); // Empieza a mostrar el siguiente bloque
      }
    }

    // Muestra el primer bloque de texto letra por letra
    appendTitle();

    // Espera a que se presione una tecla o se toque la pantalla para continuar
    document.addEventListener('keydown', onContinue);
    document.addEventListener('touchstart', onContinue);

    clearTimeout(c);
  }, 1000);
};
