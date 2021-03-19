function loadTimes(){
    document.getElementById('timeDisplay').innerHTML = moment().format('h:mm:ss a');
    document.getElementById('dateDisplay').innerHTML = moment().format('MMMM Do YYYY');
};
const currentDate = setInterval(loadTimes, 1000);
// document.getElementById('dateDisplay').innerHTML = currentDate.format('MMMM Do YYYY');
// document.getElementById('timeDisplay').innerHTML = currentDate.format('h:mm a');





const dailyPlans = {9: "", 10: "", 11: "", 12: "", 1: "", 2: "", 3: "", 4: "", 5: ""};






function createKey() {
    const key = moment().format('MM DD YYYY');
    return key;
};



function saveTimes(){
    
    localStorage.setItem(createKey(), dailyPlans)
};