const test = "salut ceci est un texte de test, utilisé pour tester le js de mon side project.";
let letter_count = -1;
const text_area = document.querySelector('.text-ctn');

text_splitted = test.split('');
text_splitted.forEach(el => {
  let elDOM = document.createElement("span")
  elDOM.innerHTML = el
  elDOM.classList.add('text-item')
  text_area.appendChild(elDOM)
});
const span_count = document.querySelectorAll('.text-item');



window.addEventListener('keydown', function (e) {
    console.log(`You pressed ${e.key}`);
    letter_count++;
    console.log(span_count[letter_count].innerHTML);
    if (e.key != span_count[letter_count].innerHTML) {
      span_count[letter_count].classList.add('wrong')
    } else {
      span_count[letter_count].classList.add('good')
    }
  }, false);

