var secondHand=document.querySelector(".second-hand");
var hourHand=document.querySelector(".hour-hand");
var minuteHand=document.querySelector(".minute-hand");


function setDate(){
    const now=new Date();
    const hour=now.getHours();
    const minute=now.getMinutes();
    const second=now.getSeconds();

    
    const hourDegree=((hour/12)*360)+90;
    const minuteDegree=((minute/60)*360)+90;
    const secondsDegree=((second/60)*360)+90;


    hourHand.style.transform=`rotate(${hourDegree}deg)`
    minuteHand.style.transform=`rotate(${minuteDegree}deg)`
    secondHand.style.transform=`rotate(${secondsDegree}deg)`
}

setInterval(setDate,1000);