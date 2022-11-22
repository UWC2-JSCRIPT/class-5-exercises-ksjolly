// When a user clicks the + element, the count should increase by 1 on screen.
// When a user clicks the – element, the count should decrease by 1 on screen.
let counter = 0;
const plusEl = document.getElementById('plus');
const minusEl = document.getElementById('minus');
plusEl.addEventListener('click', (e) => {
    counter++;
    console.log(`count is ${counter}`);
})

minusEl.addEventListener('click', (e) => {
    counter--;
    console.log(`count is ${counter}`);
})

 