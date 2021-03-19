$(document).ready( function (){




    function loadTimes(){
        document.getElementById('timeDisplay').innerHTML = moment().format('h:mm:ss a');
        document.getElementById('dateDisplay').innerHTML = moment().format('dddd, MMMM Do YYYY');
    };
    const currentDate = setInterval(loadTimes, 1000);
    // document.getElementById('dateDisplay').innerHTML = currentDate.format('MMMM Do YYYY');
    // document.getElementById('timeDisplay').innerHTML = currentDate.format('h:mm a');

    let now = parseInt(moment().format('HH'));

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
    
    
    
    
    
    const $text9AM = $("#text9AM");
    const $text10AM = $("#text10AM");
    const $text11AM = $("#text11AM");
    const $text12PM = $("#text12PM");
    const $text1PM = $("#text1PM");
    const $text2PM = $("#text2PM");
    const $text3PM = $("#text3PM");
    const $text4PM = $("#text4PM");
    const $text5PM = $("#text5PM");


    const dailyPlans = {9: $text9AM.val(), 10: $text10AM.val(), 11: $text11AM.val(), 12: $text12PM.val(), 1: $text1PM.val(), 2: $text2PM.val(), 3: $text3PM.val(), 4: $text4PM.val(), 5: $text5PM.val()};






    function createKey() {
        const key = moment().format('MM DD YYYY');
        return key;
    };



    function saveTimes(){
        localStorage.setItem(createKey(), dailyPlans)
    };

    $('.saveBtn').click(saveTimes());


});