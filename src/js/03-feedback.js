import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const formData = {};


const refs = {
 form: document.querySelector('.js-feedback-form'),
 textarea: document.querySelector('.js-feedback-form  textarea')
}


refs.form.addEventListener('submit', onFormSubmit),
refs.textarea.addEventListener('input', throttle(onTextAreaInput, 1000))

refs.form.addEventListener('input', e => {
    formData[e.target.name] = e.target.value;

    console.log(formData)
})

populateTextArea() 

function onFormSubmit(evt) {
evt.preventDefault();

console.log('Send form')
evt.currentTarget.reset()
localStorage.removeItem(STORAGE_KEY)
}

function onTextAreaInput(evt) {
    const message = evt.target.value;
    
    localStorage.setItem(STORAGE_KEY, message)
}

function populateTextArea() {
    const savedMessage = localStorage.getItem(STORAGE_KEY)

    if(savedMessage) {
        console.log(savedMessage)
        refs.textarea.value = savedMessage
    }
  
}