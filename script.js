//getting all the buttons(keys)

const buttons = document.querySelectorAll(".numVal");
const screen = document.querySelector("#display");
buttons.forEach(function(button){
    button.addEventListener('click', evaluate);
});

 

//evaluate function

function evaluate(event){
    const buttonClicked = event.target.value;
    if(buttonClicked ==="="){
       if(screen.value !==''){
           screen.value= eval(screen.value);
       }
    }else if(buttonClicked === 'C'){
        screen.value="";
    }else{
        screen.value += buttonClicked;
    }
}