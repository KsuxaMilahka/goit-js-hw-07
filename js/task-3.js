const inputEl = document.querySelector('#name-input');

const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', event => {
    const inputText = inputEl.value.trim(); 

    if (inputText === '') {
        outputEl.textContent = 'Anonymous';
    } else {
        outputEl.textContent = inputText;
    }

   });