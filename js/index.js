const inputShowNewValue = document.querySelector('.answer input'),
    numbers = document.querySelectorAll('.number'),
    remove = document.querySelector('.remove'),
    plus = document.querySelector('.plus'),
    minus = document.querySelector('.minus'),
    radical = document.querySelector('.radical'),
    impartire = document.querySelector('.impartire'),
    egal = document.querySelector('.egal'),
    inmultire = document.querySelector('.inmultire');

inputShowNewValue.value = '';
inputShowNewValue.readOnly = true;
numbers.forEach(item => {
    item.addEventListener('click', () => {
        inputShowNewValue.value += item.textContent;
    });
});

remove.addEventListener('click', () => {
    inputShowNewValue.value = '';
});

egal.addEventListener('click', () => {
    if (inputShowNewValue.value == ''){
        inputShowNewValue.value = '';
    } else {
        inputShowNewValue.value = eval(inputShowNewValue.value);
    }
});

let arr = [plus, minus, impartire, inmultire, radical];

arr.forEach(item => {
    item.addEventListener('click', () => {
        if (inputShowNewValue.value == ''){
            inputShowNewValue.value = '';
        } else if (inputShowNewValue.value.slice(-1) == '+' || inputShowNewValue.value.slice(-1) == '-' || inputShowNewValue.value.slice(-1) == '/' || inputShowNewValue.value.slice(-1) == '*' || inputShowNewValue.value.slice(-1) == '%'){
            inputShowNewValue.value = inputShowNewValue.value.slice(0, -1) + item.textContent;
        } else {
            inputShowNewValue.value += item.textContent;
        }
    });
});