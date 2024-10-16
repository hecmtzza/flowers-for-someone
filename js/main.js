onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Te he escrito mucho estos días, solo no quiero que se llegue a una costumbre y por eso prefiero no darte aquello que escribo. Han pasado veinte grados de cambio en mi vida, dos minutos que parecen eternos, doce segundos que marcan la diferencia hacia el norte de mi existencia. Esto es una recopilación de esas pequeñas cosas que escribí, no sin antes aprovechar para decirte que me siento pleno, me sorprende cómo es posible vivir tanto en tan poco. Noventa y ocho razones para sonreír, cuarenta y tres momentos únicos, cuarenta y seis segundos de pura felicidad que me llevan al oeste de mi corazón. Sentir nuevas cosas, encontrar una persona tan fuera de lo común. Me llena el que me invitaras con tu familia, el que me integres en tus actividades. Me pesa, me pesa demasiado sentir tanto, me da miedo y a la vez emoción, es como una montaña rusa qué perro miedo, pero lo haces por la emoción que sientes. Intento día con día mejorar por mí y para ti, intento no sobrepensar tanto, intento ser mi mejor versión, no sé si mis intentos han sido suficientes, lo que sí sé es que es la primera vez que me dan ganas el intentar. Y no es por el universo, no es por mi edad, no es porque estuviera buscando, es porque simplemente vales toda la pena en intentar, para mí eres esa persona que me vino a cambiar todo, desde comportamiento hasta sentimientos, y de verdad jamás he amado de esta forma. A partir de esta semana las cosas serán diferentes, pero, ¿qué carajo no ha sido nuevo y diferente desde que estás? ¿Qué cosa no sería capaz de hacer por ti, por nosotros? Va a ser algo difícil, algo nuevo, pero de verdad que estoy dispuesto a todo, primero gracias por la apertura y apoyarme en esto, sin embargo, estoy dispuesto a hacer lo necesario para que estemos bien. Espero que jamás dudes lo mucho que te amo, se dice que los sentimientos son muy extraños porque un día aparecen y un día se esfuman, yo no creo eso, creo más bien en que el sentimiento no aparece, va creciendo y es hasta cierto momento que lo detectamos y creo que un sentir real, un sentir verdadero no desaparece. Durante todo el tiempo que pueda estar contigo las cartas no dejaran de existir, lo que me has dado ha generado en mí es algo que perdurará por siempre, me mostraste algo nuevo, trasciende el tiempo. Somos de donde queremos ir corriendo a contar una noticia. -H').split('');
    const titleElement = document.getElementById('title');
    let index = 0;
    let currentText = '';
    const maxLength = 150; // Máximo número de caracteres visibles por bloque
    let showingText = false; // Controla si las letras están mostrándose una por una

    function appendTitle() {
      if (index < titles.length) {
        currentText += titles[index]; // Añade letra a letra al texto visible
        index++;

        titleElement.innerHTML = currentText;

        if (currentText.length >= maxLength && titles[index - 1] === ' ') {
          showingText = false; // Detiene cuando se llega a un bloque de palabras completo
        } else {
          setTimeout(appendTitle, 30); // Muestra letra por letra cada 50ms
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
