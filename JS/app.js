function getPin(){
    const pin = Math.round(Math.random()*10000);
    const pinString=pin+'';
    if(pinString.length==4){
        return pin;
    }
    else{
        console.log("Got 3 digit and calling again",pin);
    }
}

function generatePin() {
    const pin= getPin();
    // console.log(pin);
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', 
function(event){
   const number=event.target.innerText;
   const calcInput= document.getElementById('typed-numbers');
   if(isNaN(number)){
       if(number=='C'){
           calcInput.value='';
       }
   }else{
   
    //    calc.value=number;
       const previousNumber=calcInput.value;
       const newNumber=previousNumber + number;
       calcInput.value=newNumber;
   }
  

});
function verifyPin(){
    const pin= document.getElementById('display-pin').value;
    const typedNumbers=document.getElementById('typed-numbers').value;

    const sucessNotification=document.getElementById('notify-success');
    const failNotification=document.getElementById('notify-fail');
    if(pin==typedNumbers){ 
        sucessNotification.style.display='block';
        failNotification.style.display='none';
    }
    else {
        failNotification.style.display='block';
        sucessNotification.style.display='none';
    }
}
