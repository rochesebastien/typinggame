const test = "salut ceci est un texte de test, utilisé pour tester le js de mon side project.";
let letter_count = -1;
const text_area = document.querySelector('.text-ctn');

// ! Initialise le texte 
text_splitted = test.split('');
text_splitted.forEach(el => {
  let elDOM = document.createElement("span")
  elDOM.innerHTML = el
  elDOM.classList.add('text-item')
  text_area.appendChild(elDOM)
});
const span_count = document.querySelectorAll('.text-item');


// ? Event keyboard
window.addEventListener('keydown', function (e) {
    console.log(`You pressed ${e.key}`);
    if(e.key != "Shift"){
      if(e.key =="Backspace"){
        span_count[letter_count].classList.remove('wrong')
        span_count[letter_count].classList.remove('good')
        letter_count--;
      } else {
        letter_count++;
        if (e.key != span_count[letter_count].innerHTML) {
          span_count[letter_count].classList.add('wrong')
        } else {
          addPointLetter()
          span_count[letter_count].classList.add('good')
        }
      }
      console.log(span_count[letter_count].innerHTML);
    }
    

  }, false);

function addPointLetter(){
  let init = 0
  let score = document.querySelector('#score');
  score.innerHTML= init + 1
}