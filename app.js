let input = document.getElementById("inputBox");
let btns = document.querySelectorAll("button");

let str="";
let arr = Array.from(btns);
let flag = false;

arr.forEach(button => {
    button.addEventListener('click' , (e) => {
        if(e.target.innerHTML == '='){
            try{
                str = eval(str);
            }catch(error){
                input.value = "Syntax Error";
                input.style.color = "red";
                flag = true;
            }
        }
        else if(e.target.innerHTML == "AC"){
            str = "";
        }
        else if(e.target.innerHTML == "DEL"){
            str = str.slice(0,-1);
        }
        else if(e.target.innerHTML == "+/-"){
            if(str.charAt(0) != '-') str = "-".concat(str);
            else str = str.substring(1);
        }
        else{
            str+=e.target.innerHTML;
        }
        if(!flag){
            input.value =str;
            input.style.color = "white";
        }
        flag = false;
    })
})