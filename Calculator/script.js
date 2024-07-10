// script.js
const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('btn'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        const value = e.target.innerText;
        
        switch(value) {
            case 'C':
                display.innerText = '0';
                break;
            case 'DEL':
                if (display.innerText.length > 1) {
                    display.innerText = display.innerText.slice(0, -1);
                } else {
                    display.innerText = '0';
                }
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error';
                }
                break;
            case '.':
                if (!display.innerText.includes('.')) {
                    display.innerText += '.';
                }
                break;
            default:
                if (display.innerText === '0') {
                    display.innerText = value;
                } else {
                    display.innerText += value;
                }
        }
    });
});