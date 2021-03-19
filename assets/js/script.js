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


    const dailyPlans = {'9AM': "", '10AM': "", '11AM': "", '12PM': "", '1PM': "", '2PM': "", '3PM': "", '4PM': "", '5PM': ""};






    function createKey() {
        const key = moment().format('MM/DD/YYYY');
        return key;
    };



    function saveTimes(...args){
        debugger;
       Object.keys(dailyPlans).forEach(key => {
           const $text = $(`#text${key}`);
           dailyPlans[key] = $text.val();
       })
        // dailyPlans[9] = $text9AM.val();
        // dailyPlans[10] = $text10AM.val();
        // dailyPlans[11] = $text11AM.val();
        // dailyPlans[12] = $text12PM.val();
        localStorage.setItem(createKey(), JSON.stringify(dailyPlans));
    };

    $('.saveBtn').click(saveTimes);

    $('#text9AM').val()
});