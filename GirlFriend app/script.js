const hisName = document.querySelector('#input1')
const herName = document.querySelector('#input2')

const btn = document.querySelector('button')



let output = document.querySelector('.output')
btn.addEventListener('click', () => {
    let words = ["i'm sorry " + hisName.value + ", " + herName.value + " is cheating on you ):"]
    output.innerHTML = words[0];
});