const refs = {
    inputName: document.querySelector('input[id="name-input"]'),
    screenName: document.querySelector('span[id="name-output"]'),
};

const onInputenterName = (event) => {
    refs.screenName.textContent = event.currentTarget.value;
    if (event.currentTarget.value === '')
        refs.screenName.textContent = 'Anonymous';
};

refs.inputName.addEventListener('input', onInputenterName);
