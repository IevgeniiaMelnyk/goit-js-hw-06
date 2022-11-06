const refs = {
    inputRange: document.querySelector('input[id="font-size-control"]'),
    text: document.querySelector('span[id="text"]'),
};

const onInputRangeChengeTextS = (event) => {
    refs.text.style.fontSize = `${Number(event.currentTarget.value)}px`;
};

refs.inputRange.addEventListener('input', onInputRangeChengeTextS);