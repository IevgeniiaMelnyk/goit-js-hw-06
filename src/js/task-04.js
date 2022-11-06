const refs = {
    decrementCounterBtn: document.querySelector('button[data-action="decrement"]'),
    incrementCounterBtn: document.querySelector('button[data-action="increment"]'),
    counter: document.querySelector('span[id="value"]'),
};

let counterValue = 0;

const render = () => {
    refs.counter.textContent = counterValue;
};

const decrementCounter = () => {
    counterValue -= 1;
    render();
};

const incrementCounter = () => {
    counterValue += 1;
    render();
};

refs.decrementCounterBtn.addEventListener('click', decrementCounter);
refs.incrementCounterBtn.addEventListener('click', incrementCounter);