const refs = {
    inputContent: document.querySelector('input[id="validation-input"]'),
};

const onInputValidator = (event) => {
    
    event.currentTarget.value.length === Number(refs.inputContent.attributes[2].value)   
        ? refs.inputContent.classList.add('valid')
        : refs.inputContent.classList.add('invalid') 
};

const removClass = () => {
    refs.inputContent.classList.remove('valid');
    refs.inputContent.classList.remove('invalid');
};

refs.inputContent.addEventListener('focus', removClass);
refs.inputContent.addEventListener('blur', onInputValidator);


