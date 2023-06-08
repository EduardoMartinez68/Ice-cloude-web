const boton = document.getElementById('btn-on-monday');
const icono = document.getElementById('i-on-monday');

boton.addEventListener('click', ()=>{
    //we will watch if the class have the label of actived
    if (icono.classList.contains('schedule-active')) {
      icono.classList.remove('schedule-active');
    } else {
      icono.classList.add('schedule-active');
    }
    restartTime();
    addAllTheHours();
});

function restartTime(){
  const starTime = document.getElementById('starMonday');
  const finishTime = document.getElementById('finishMonday');
  starTime.value = starTime.defaultValue;
  finishTime.value = finishTime.defaultValue;

  starTime.disabled = !starTime.disabled;
  finishTime.disabled = !finishTime.disabled;
}

function addAllTheHours(){
  const mondayHours=getMondayHours();

  const hours=mondayHours;
  document.getElementById('totalHourse').value=hours;
  
}

function getMondayHours(){

}