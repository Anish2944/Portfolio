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
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});

const mode = document.getElementById("mode");
mode.addEventListener("click", () => {
    
})