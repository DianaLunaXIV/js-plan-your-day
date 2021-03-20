//Load times to be displayed in jumbotron
function loadTimes(){
    document.getElementById('timeDisplay').innerHTML = moment().format('h:mm:ss a');
    document.getElementById('dateDisplay').innerHTML = moment().format('dddd, MMMM Do YYYY');
};
//Update times every second
const currentDate = setInterval(loadTimes, 1000);

//Define current hour in military hours. 
//Military hours allow additive counting and avoids am/pm confusion.    
let now = parseInt(moment().format('kk'));

//Checks each textarea element and updates class.
$("textarea").each(function () {
    const name = parseInt($(this).attr("name"));
    if (name < now) {
        $(this).addClass("past");
    }


    if (name > now) {
        $(this).addClass("future")
    }

    if (name === now) {
        $(this).addClass("present")
    }
});
    
// Define variables for textarea elements
const $text9AM = $("#text9AM");
const $text10AM = $("#text10AM");
const $text11AM = $("#text11AM");
const $text12PM = $("#text12PM");
const $text1PM = $("#text1PM");
const $text2PM = $("#text2PM");
const $text3PM = $("#text3PM");
const $text4PM = $("#text4PM");
const $text5PM = $("#text5PM");

//Define default, black object to be loaded
const dailyPlans = {'9AM': "", '10AM': "", '11AM': "", '12PM': "", '1PM': "", '2PM': "", '3PM': "", '4PM': "", '5PM': ""};



//Define key with which to associate planner object in storage
function createKey() {
    const key = moment().format('MM/DD/YYYY');
    return key;
};


//Save to local storage as k:v pair 'date: planObject'
//Object.keys allows object to be iterated like an array.
function saveTimes(...args){
   Object.keys(dailyPlans).forEach(key => {
       const $text = $(`#text${key}`);
       dailyPlans[key] = $text.val();
   });
    localStorage.setItem(createKey(), JSON.stringify(dailyPlans));
};

//All buttons with .saveBtn class call saveTimes function when clicked
$('.saveBtn').click(saveTimes);

function loadFromStorage(...args){

    let loadedPlans = JSON.parse(localStorage.getItem(moment().format('MM/DD/YYYY')));
    if (loadedPlans == undefined) {
        loadedPlans = dailyPlans;
    };
    Object.keys(loadedPlans).forEach(key => {
        let $text = $(`#text${key}`);
        $text.val(loadedPlans[key]);
    })
};
loadFromStorage();