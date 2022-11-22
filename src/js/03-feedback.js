import throttle from 'lodash.throttle';


const STORAGE_KEY = 'feedback-form-state';

const refs = {
    form: document.querySelector('.feedback-form '),
    email: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
}


refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

// Зупиняємо поведінку зазамовчування.
// Прибираємо з сторедж
// Чистимо форму
function onFormSubmit(event) {
    event.preventDefault();
    if (refs.email.value === '' || refs.textarea.value === '') {
        return alert('Not all fields are filled');
    }
   
    console.log({ Email: refs.email.value, message: refs.textarea.value });
    localStorage.removeItem(STORAGE_KEY);
    event.currentTarget.reset();
};

// отриуємо значення поля і зберігаємо в сторедж
let dataInput = {};
function onTextareaInput(event) {
    dataInput.email = refs.email.value;
    dataInput.message = refs.textarea.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dataInput));
};

// Отриуємо значення з зберігання якщо там щось було.Обновляємо дом

// function populeitTextare() {
//     const removeMessage = localStorage.getItem(STORAGE_KEY);
//     console.log(removeMessage);
//     const data = JSON.parse(removeMessage);
//     if (data.email) {
//         refs.email.value = data.email
//     }; if (data.message) {
//         refs.textarea.value = data.message;
//     }
    
// };
