let screen=document.getElementById('screen');
buttons=document.querySelectorAll("button");
let screenValue="";

function backSpace(){
    screen.value = screen.value.slice(0, - 1);
}


for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log('button clicked is',buttonText);
        if(buttonText=="X"){
            buttonText="*";
            screenValue+=buttonText;
            screen.value=screenValue;        }
        else if(buttonText=="="){
                screen.value=eval(screenValue);
                
        }
        else if(buttonText=="C"){
            screenValue='';
                screen.value=screenValue;

                
            }
        else if(buttonText=='←'){
            backSpace();
            
        }
        
        else{

            screenValue+=buttonText;
            screen.value=screenValue;
        }
    })
}