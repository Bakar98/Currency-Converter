var inputAmount = document.getElementById("amount");
var fromSelect = document.getElementById("fromSelect");
var toSelect = document.getElementById("toSelect");
var fromOutput = document.getElementById("fromOutput");
var toOutput = document.getElementById("toOutput");
var exchangeBtn = document.getElementById("exhcangeBtn");
var fromLabel = document.getElementById("fromLabel");
var toLabel = document.getElementById("toLabel");
var convert_iconBtn = document.getElementById("convert_icon");

exchangeBtn.addEventListener("click", function(){

    if(inputAmount.value){
        conversion(inputAmount.value);
    }
})

inputAmount.addEventListener("keyup", function(e){

    if(inputAmount.value){
        if(e.keyCode == 13){        
            conversion(inputAmount.value);
        }
    }
})

fromSelect.addEventListener("change", function(){
    console.log(fromSelect.value)
    fromchangeOption(fromSelect.value);
    conversion(inputAmount.value);
})

toSelect.addEventListener("change", function(){
    console.log(toSelect.value)
    tochangeOption(toSelect.value);
    conversion(inputAmount.value);
})

convert_iconBtn.addEventListener("click", function(){
    var temp = fromSelect.value;
    var temp1 = fromOutput.innerText;
    fromOutput.innerText = toOutput.innerText;
    toOutput.innerText = temp1;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    fromchangeOption(fromSelect.value)
    tochangeOption(toSelect.value)


})

function conversion(value){
    fromOutput.innerText = value;
    var temp =  convert(fromSelect.value, toSelect.value);
    var ans = inputAmount.value * temp;
    toOutput.innerText = ans.toFixed(2);
}

function fromchangeOption(value){
    if(value == 0){
        fromLabel.innerText = "USD";
    }
    if(value == 1){
        fromLabel.innerText = "INR";
    }
    if(value == 2){
        fromLabel.innerText = "SAR";
    }
    if(value == 3){
        fromLabel.innerText = "AED";
    }
    if(value == 4)
    {
        fromLabel.innerText = "EUR";
    }
}

function tochangeOption(value){
    if(value == 0){
        toLabel.innerText = "USD";
    }
    if(value == 1){
        toLabel.innerText = "INR";
    }
    if(value == 2){
        toLabel.innerText = "SAR";
    }
    if(value == 3){
        toLabel.innerText = "AED";
    }
    if(value == 4)
    {
        toLabel.innerText = "EUR";
    }
}

function convert(from , to){
    if(from == 0)
    {
        if(to == 0){
            return 1;
        }
        if(to == 1){
            return 76.20;
        }
        if(to == 2){
            return 3.75;
        }
        if(to == 3){
            return 3.67;
        }
        if(to == 4){
            return 0.92;
        }
    }

    if(from == 1)
    {
        if(to == 0){
            return 0.013;
        }
        if(to == 1){
            return 1;
        }
        if(to == 2){
            return 0.049;
        }
        if(to == 3){
            return 0.048;
        }
        if(to == 4){
            return 0.012;
        }
    }

    if(from == 2)
    {
        if(to == 0){
            return 0.27;
        }
        if(to == 1){
            return 20.32;
        }
        if(to == 2){
            return 1;
        }
        if(to == 3){
            return 0.98;
        }
        if(to == 4){
            return 0.24;
        }
    }

    if(from == 3)
    {
        if(to == 0){
            return 0.27;
        }
        if(to == 1){
            return 20.75;
        }
        if(to == 2){
            return 1.02;
        }
        if(to == 3){
            return 1;
        }
        if(to == 4){
            return 0.25;
        }
    }

    if(from == 4)
    {
        if(to == 0){
            return 1.09;
        }
        if(to == 1){
            return 82.97;
        }
        if(to == 2){
            return 4.08;
        }
        if(to == 3){
            return 4;
        }
        if(to == 4){
            return 1;
        }
    }

}