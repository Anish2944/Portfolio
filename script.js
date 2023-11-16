
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
