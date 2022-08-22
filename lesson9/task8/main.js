// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let form = document.form

form.onsubmit = function (e) {
    e.preventDefault()
    let age = this.age.value
    if (age < 18) {
        alert('You are too young')
    } else {
        alert('Confirmed')
    }
}















