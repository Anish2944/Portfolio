
/* script for receiving data in google sheet*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbwzUKomP3OsSUc9lvoTaxhi_a0txXLhHrnMoe8A4FnbvCXuhnKa7QJx2HbmeaG-NwD3tg/exec';
const form = document.forms['submit-to-google-sheet']

const message = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      message.innerHTML = "Message sent Successfully.&#x2714;"
      setTimeout(()=>{
        message.innerHTML = ""
      },4000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});

/*Dark mode toggle */

const mode = document.getElementById("mode");
const body = document.body;
mode.addEventListener("click", () => {
  body.classList.toggle("active");
});

/* script for Load more */

document.addEventListener("DOMContentLoaded", () => {

  const seeBTN = document.getElementById("seeMore");
  const cards = document.querySelectorAll(".card1")
  
  function seeMoreCards() {
    if (!cards[0].classList.contains('visible')) {
      for (let i = 0; i < 3; i++) {
        cards[i].classList.add('visible');
      }
      return;
    }
    for (let i = 0; i < cards.length; i+=3) {
      const element = Array.from(cards).slice(i,i+3);
      element.forEach(card => {
        card.classList.toggle("visible");
      });
    }
    const allVisible = Array.from(cards).every(card => card.classList.contains("visible"));
    seeBTN.style.display = allVisible ? `none` : `block`;
  }
  
  seeBTN.addEventListener("click",seeMoreCards);
  seeMoreCards();
});

// Script for nav toggle
const menuBTN = document.getElementById("menuBAR");
const toggle = document.getElementById("navToggle");
menuBTN.addEventListener("click", () => {
  toggle.classList.toggle("active2");
})