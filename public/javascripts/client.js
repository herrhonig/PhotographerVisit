const $form = document.getElementById('contact-form');
const $myModal = document.querySelector('.myModal1');

console.log('Привет!123');
console.log();

$form.addEventListener('submit', async (event) => {
  console.log('Привет!');
  event.preventDefault();

  const formData = Object.fromEntries(new FormData(event.target));
  formData.total = document.getElementById('final-cost').innerText
  console.log(formData.total);

  if (formData.name.length > 0 && formData.phone.length === 11 && formData.email.includes('@')){
    const response = await fetch('/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(formData),
    });
    // myModal.classList.remove('hide');
    console.log(response.status);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    // document.getElementById("total").value = "";
    document.getElementById("thank-you").classList.remove('hide');
  } else {
    alert('Извините, введенные данные некорректны, попробуйте снова')
  }

})
