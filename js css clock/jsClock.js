
// const secHand = document.querySelector('.sec-hand');
// const minHand = document.querySelector('.min-hand');
// const hourHand = document.querySelector('.hour-hand');

// function setDate(){
//     let now = new Date();
//     let sec = now.getSeconds();
//     let min = now.getMinutes();
//     let hour = now.getHours();
    
//     let sec2deg = ((sec / 60) * 360) + 90;
//     let min2deg = ((min / 60) * 360) + 90;
//     let hour2deg = ((hour / 12) *360) + 90;
//     console.log(hour2deg +':'+min2deg+':=>'+sec2deg)

//     secHand.style.transform = `rotate(${sec2deg}deg)`;
//     minHand.style.transform = `rotate(${min2deg}deg)`;
//     hourHand.style.transform = `rotate(${hour2deg}deg)`
// }

// setInterval(setDate,  1000);
// setDate();


  const secondHand = document.querySelector('.sec-hand');
  const minsHand = document.querySelector('.min-hand');
  const hourHand = document.querySelector('.hour-hand');

  function setDate() {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hourDegrees +':'+minsDegrees+':=>'+secondsDegrees)
  }

  setInterval(setDate, 1000);

  setDate();
