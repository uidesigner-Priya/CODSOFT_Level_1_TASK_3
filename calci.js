const display=document.querySelector('#display');
const buttons=document.querySelectorAll('button');

buttons.forEach((item)=>{
    item.onclick=()=>{
        if(item.id=='clear'){
            display.innerText='';
        }
        else if(item.id=='backspace'){
            let string=display.innerText.toString();
            display.innerText=string.substr(0,string.length - 1);
        }
        else if(display.innerText!='' && item.id=='eq'){
            try{
                display.innerText=eval(display.innerText);
            }
            catch{
                display.innerText='Error!';
                setTimeout(()=>(display.innerText=''),2000)
            }
        }
        else if(display.innerText=='' && item.id=='eq'){
            display.innerText='Empty!';
            setTimeout(()=> (display.innerText=''),2000);
        }
        else{
            display.innerText+=item.id;
        }
    };
});

const togbtn=document.querySelector('.toggle');
const calc=document.querySelector('.calculator');
const togicon=document.querySelector('.t-icon');

let isDark=true;
togbtn.onclick=()=>{
    calc.classList.toggle('dark-mode');
    togbtn.classList.toggle('active');
    isDark=!isDark;
}