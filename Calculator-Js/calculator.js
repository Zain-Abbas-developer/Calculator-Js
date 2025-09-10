

// get data from buttons

let screenValue = document.getElementById("screen-value");
function addDataToScreen(val){
    screenValue.value += val;
}

function calculate(){
    try{
        screenValue.value = eval(screenValue.value);
    } catch{
        screenValue.value = "Error in calculation"
    }
}

function clearScreen(){
    screenValue.value = "";
}

function percentBtn(val){
    screenValue.value += val;
}

function convertBtn(){
    if(screenValue.value) {
        if(screenValue.value.startsWith('-')){
            screenValue.value = screenValue.value.substring(1);
        } else {
            screenValue.value = '-' + screenValue.value;
        }
    }
}
