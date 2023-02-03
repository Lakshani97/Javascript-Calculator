function getInput(){
    return document.getElementById("input-value").innerText;
}
function printInput(num){
    document.getElementById("input-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}
function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=num=getFormattedNumber(num);
    }
    
}

function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printInput("");
            printOutput("");
        }
        else if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){
                output=output.substr(0,output.length-1);
                printOutput(output);
            }
        }
        else{
            var output=getOutput();
            var input=getInput();
            if(output==""&&input!=""){
                if(isNaN(input[input.length-1])){
                    input=input.substr(0,input.length-1);
                }
            }
            if(output!="" || input!=""){
                output=output==""?
                output:reverseNumberFormat(output);
                input=input+output;
                if(this.id=="="){
                    var result=eval(input);
                    printOutput(result);
                    printInput("");
                }
                else{
                    input=input+this.id;
                    printInput(input);
                    printOutput("");
                }
            }
        }
    });
}

var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    });
}