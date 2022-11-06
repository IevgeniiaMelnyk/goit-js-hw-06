const form = document.querySelector('.login-form');

const onFormSubmit = (event) => {
    event.preventDefault();
    
    if (event.currentTarget[0].value === '' || event.currentTarget[1].value === '') {
        alert('Все поля должны быть заполнены!')
    } else {
        const formData = new FormData(event.currentTarget);

        console.log(formData.entries())        
        console.log(Object.fromEntries(formData))
        // formData.forEach((name, value) => {
        //     console.log(value, name)
        // })
    }
}
form.addEventListener('submit', onFormSubmit)
