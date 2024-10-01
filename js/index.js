const title = document.querySelector('.title')
const text = 'I Have Something Te he escrito mucho estos días, solo no quiero que se llegue a una costumbre y por eso prefiero no darte aquello que escribo.Esto es una recapitulación de esas pequeñas cosas que escribí, no sin antes aprovechar para decirte que me siento pleno, me sorprende cómo es posible vivir tanto en tan poco, sentir nuevas cosas, encontrar una persona tan fuera de lo común.'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});