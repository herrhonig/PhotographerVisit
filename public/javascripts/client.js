const $form = document.getElementById('contact-form');
const $myModal = document.querySelector('.myModal1');
const $buttons = document.querySelectorAll('.buy-button');

$buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const id = event.target.id
    const price = document.querySelector(`.strong-price${id}`).innerText.replace(/\D/g, '')
    const finalPrice = document.getElementById('final-cost')
    finalPrice.innerText = price;
  })
})

$form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const formData = Object.fromEntries(new FormData(event.target));
  formData.total = document.getElementById('final-cost').innerText

  if (formData.name.length > 0 && formData.phone.length === 11 && formData.email.includes('@')){
    const response = await fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formData),
    });
    // myModal.classList.remove('hide');
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    // document.getElementById("total").value = "";
    document.getElementById("thank-you").classList.remove('hide');
  } else {
    alert('Извините, введенные данные некорректны, попробуйте снова')
  }

})
