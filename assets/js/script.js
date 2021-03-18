//
const currentDate = setInterval(loadTimes, 1000);
// document.getElementById('dateDisplay').innerHTML = currentDate.format('MMMM Do YYYY');
// document.getElementById('timeDisplay').innerHTML = currentDate.format('h:mm a');

function loadTimes(){
        document.getElementById('timeDisplay').innerHTML = moment().format('h:mm:ss a');
        document.getElementById('dateDisplay').innerHTML = moment().format('MMMM Do YYYY');
};










function getKey() {

};

function saveTime(input){
    localStorage.setItem()
};