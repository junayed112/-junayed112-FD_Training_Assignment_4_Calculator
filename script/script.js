let screen = document.querySelector('#screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';
let prev_ans = '';
let count = 0;
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText);
        if (buttonText == 'X') {
            buttonText = '*';
            count++;
            if(count>1){
                screenValue = eval(screenValue);
                prev_ans = screenValue;
            }
            screenValue += buttonText;
            screen.value = screenValue;
            document.getElementById("dot").disabled = false;
        }
        else if (buttonText == 'AC') {
            screenValue = "";
            screen.value = screenValue;
            document.getElementById("dot").disabled = false;
        }
        else if(buttonText == 'C'){
            let len = screenValue.length;
            len--;
            let str = screenValue.slice(0,len);
            console.log(str);
            if(screenValue[len]=='.'){
                document.getElementById("dot").disabled = false;
            }
            screenValue = str;
            screen.value = screenValue;

        }
        else if (buttonText == '=') {
            if(screenValue[screenValue.length-1]=='%'){
                let l = screenValue.length;
                let s = screenValue.slice(0,l-1);
                screenValue = eval(s);
                screenValue /= 100;
            }
            else{
                screenValue = eval(screenValue);
            }
            console.log(screenValue);
            screen.value = screenValue;
            screenValue = screenValue.toString();
            prev_ans = screenValue;
            if(!Number.isInteger(parseFloat(prev_ans))){
                document.getElementById("dot").disabled = true;
            }
            else{
                document.getElementById("dot").disabled = false;
            }
        }
        else if(buttonText == 'Ans'){
            if(!Number.isInteger(parseFloat(prev_ans))){
                document.getElementById("dot").disabled = true;
            }
            screenValue += prev_ans;
            screen.value = screenValue;
        }
        else if(buttonText == '.'){
            screenValue += buttonText;
            screen.value = screenValue;
            document.getElementById("dot").disabled = true;
        }
        else {
            if(buttonText == '/' || buttonText == '+' || buttonText == '-'){
                document.getElementById("dot").disabled = false;
                count++;
                if(count>1){
                    screenValue = eval(screenValue);
                    prev_ans = screenValue;
                }
            }
            screenValue += buttonText;
            screen.value = screenValue;
        }

    })
}