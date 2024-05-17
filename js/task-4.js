const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', event => {
	event.preventDefault();
});

loginForm.addEventListener('submit', loginFormSubmit);

function loginFormSubmit(event) {
  event.preventDefault();
  const form = loginForm;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (email === '' || password === '') {
      alert('All form fields must be filled in');
      return;
  }

  console.log(`Login: ${email}, Password: ${password}`);
  form.reset();
};

