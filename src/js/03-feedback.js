import throttle from "lodash.throttle";

// const STORAGE_KEY = 'feedback-form-state';

// const formData = {};


// const refs = {
//  form: document.querySelector('.js-feedback-form'),
//  textarea: document.querySelector('.js-feedback-form  textarea')
// }


// refs.form.addEventListener('submit', onFormSubmit),
// refs.textarea.addEventListener('input', throttle(onTextAreaInput, 1000))

// refs.form.addEventListener('input', e => {
//     formData[e.target.name] = e.target.value;
//     localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

//     console.log(formData)
// })

// populateTextArea() 

// function onFormSubmit(evt) {
// evt.preventDefault();

// evt.currentTarget.reset()
// localStorage.removeItem(STORAGE_KEY)
// // formData = {};
// }

// function onTextAreaInput(evt) {
//     const message = evt.target.value;
    
//     localStorage.setItem(STORAGE_KEY, message)
// }

// function populateTextArea() {
//     const savedMessage = localStorage.getItem(STORAGE_KEY)

//     if(savedMessage) {
//         console.log(savedMessage)
//         refs.textarea.value = savedMessage
//     }
// }







const STORAGE_KEY = 'feedback-form-state';

let formData = localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : {};
console.log(formData)

const refs = { 

    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input',  throttle(onFormInput, 500));

populateTextarea();

function onFormInput(evt) {
        formData[evt.target.name] = evt.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
}

function onFormSubmit(evt) { 
    evt.preventDefault();   // не перезавантажувати сторінку

    evt.currentTarget.reset(); // очистити поля після відправлення
   
    const feedback = localStorage.getItem(STORAGE_KEY);
    console.log(feedback);

    localStorage.removeItem(STORAGE_KEY);  // якщо відправлено то очистити локалсторедж

    formData = {};
}

function populateTextarea() {          // при перезавантажені сторінки відображається дані збережені

    refs.email.value = formData.email ? formData.email : '';
    refs.textarea.value = formData.message ? formData.message : '';
}