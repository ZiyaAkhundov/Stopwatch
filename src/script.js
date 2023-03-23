const startButtonVar = document.querySelector("#start");
const flagButtonVar = document.querySelector("#flag");
const resetButtonVar = document.querySelector("#reset");
const flagListVar = document.querySelector(".flaglist");
const hrVar = document.querySelector("#hours");
const minVar = document.querySelector("#minutes");
const secVar = document.querySelector("#seconds");
const HSecVar = document.querySelector("#hSec");

let startHSecVar = 0;
let startSecVar = 0;
let startMinVar = 0;
let startHrVar = 0;
let sec = 1000;
let currentState = 'Start';
startButtonVar.addEventListener('click', startPausePlayFun);
resetButtonVar.addEventListener('click', resetFunc);
flagButtonVar.addEventListener('click',flagFunc);

function startPausePlayFun(){
    if(currentState === 'Start' || currentState === 'Resume')
    {
        if(currentState === 'Start'){
            startButtonVar.textContent = 'Stop';
            currentState = 'Stop';
        }
        if(currentState === 'Resume'){
            startButtonVar.textContent = 'Stop';
            currentState = 'Stop';
        }
        timeID = setInterval(HSecCount,0.01 * sec);

        function HSecCount(){
            startHSecVar +=1;
            if (startHSecVar === 100){
                startHSecVar = 0;
                startSecVar += 1;
                if(startSecVar === 60){
                    startSecVar = 0;
                    startMinVar +=1;
                    if(startMinVar === 60){
                        startMinVar = 0;
                        startHrVar +=1;
                    }
                }
            }
            HSecVar.textContent=startHSecVar.toLocaleString('en-US', { minimumIntegerDigits : 2});
            secVar.textContent=startSecVar.toLocaleString('en-US', { minimumIntegerDigits : 2});
            minVar.textContent=startMinVar.toLocaleString('en-US', { minimumIntegerDigits : 2});
            hrVar.textContent=startHrVar.toLocaleString('en-US', { minimumIntegerDigits : 2});
    
        }
}   else{
    startButtonVar.textContent = 'Resume';
    currentState = 'Resume';
    (function() {
        window.clearInterval(timeID)
    })();
}
}

function resetFunc(){
    (function() {
        window.clearInterval(timeID);
    })();
    startButtonVar.textContent = 'Start';
    currentState = 'Start';
    HSecVar.textContent = '00';
    secVar.textContent = '00';
    minVar.textContent = '00';
    hrVar.textContent = '00';
    startHSecVar = 0;
    startSecVar = 0;
    startMinVar = 0;
    startHrVar = 0;
    flagListVar.innerHTML = '';
}

function flagFunc(){
    const newFlag =document.createElement('li');
    newFlag.textContent = hrVar.textContent + ' : ' + minVar.textContent + ' : ' + secVar.textContent + ' : ' + HSecVar.textContent;
    flagListVar.appendChild(newFlag);
}