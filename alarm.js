let set = document.getElementById('set');
set.addEventListener('click', setAlarm);
let alert = document.getElementById('alert');
let audio = new Audio("alarm.mp3");
let st = document.getElementById('st');

function ringBell() {
    audio.play();
    // console.log('Sound playing');
    st.classList.remove('disabled');
    html = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Wake up!</strong> Alarm's ringing.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        alert.innerHTML = html;
        setTimeout(function () {alert.innerHTML = ''}, 5000);
}

function setAlarm(e) {
    e.preventDefault();
    let alarmDate = document.getElementById('date');
    alarmDate.toString();
    // console.log(alarmDate.value);
    let alarmTime = document.getElementById('time');
    alarmTime.toString();
    // console.log(alarmTime.value);
    let alarm1 = alarmDate.value + " "+ alarmTime.value + ":00";
    // console.log(alarm1);
    alarm = new Date(alarm1);
    // console.log(alarm);
    now = new Date();
    let timeToAlarm = alarm - now;
    // console.log(timeToAlarm);
    if(timeToAlarm > 0) {
        // console.log('Alarm set!');
        setTimeout(()=>{
            ringBell();
            st.classList.remove('disabled');
        },timeToAlarm);
        html = `<div class="alert alert-success alert-dismissible fade show" role="alert">
                    <strong>Alarm set!</strong> Don't refresh the page.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        alert.innerHTML = html;
        setTimeout(function () {alert.innerHTML = ''}, 2000);
    }
    else{
        html = `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <strong>Invalid Date!</strong> Set a future date.
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>`;
        alert.innerHTML = html;
        setTimeout(function () {alert.innerHTML = ''}, 2000);
    }
}