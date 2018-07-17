//----------------------------------
// display calendar of this moment
//--------------------------------



// definition of first day of month to start month calendar (it is a landmark)
let firstdayofmonth = '.' + moment().date(1).format('dddd');

    // syntax for jquery
let onedayclass = "#week1 " + firstdayofmonth;

let idfirstday = $(onedayclass).attr('id');

// console.log("log de idfirstday :: " + Number(idfirstday));
// console.log("log de onedayclass :: " + onedayclass);

// Implementation of days in month calendar
let i = Number(idfirstday);
let j = 0;
for (i; i <= 42; i++) {
    j++;
    // here we get the number of the current selected month
    let dat = moment().set('date',j).format('M');
    $("#" + i).text(dat);
    // turn cells orange if monthdate on the cell is superior to current month number
    // if (dat>Number(idfirstday)){
    //     $("#" + i).css("background-color", "rgb(241, 173, 50)");
    // }

}
for (i; i > 0; i--) {
    
    let dat = moment().set('date',j+1).format('D');
    $("#" + i).text(dat);
    // this is where we change the style of the dates from the month before
    // if (i < Number(idfirstday)){
    //     $("#" + i).css("background-color", "rgb(241, 173, 50)");
    // }
    
    j--;
}


//-------------------------------------------------------------------------
// handle of month and year
// -----------------------------------------------------------------------

// month definition
let month = moment().format('MMMM');
let monthnb = moment().month();
// console.log( moment().month() - 1 );
$('#month').text(month);

// and year 
let year = moment().year();
$('#year').text(year);

//----------------------
// fonction to year
//--------------------

function beforeyear(){
    year--;
    // console.log('year  :: ' + year);
    $('#year').text(year);

    // definition of first day of month to start month calendar (it is a landmark)
    firstdayofmonth = '.' + moment().set({ 'year': year, 'month': monthnb, 'date': 1 }).format('dddd');

    // syntax for jquery 
    onedayclass = "#week1 " + firstdayofmonth;
    // console.log( "onedayclass :: " + onedayclass);
    

    idfirstday = $(onedayclass).attr('id');
    // console.log( "idfirstday :: " + idfirstday);
    
    // Implementation of days in month calendar
    i = Number(idfirstday);

    let firstdayofmonthofyear = Number(moment().set({ 'year': year, 'month': monthnb, 'date': 1 }).format('DDD'));

    for (i; i <= 42; i++) {

        let dat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('ddd D MMM');
        console.log( "dat : : " + dat);
        
        $("#" + i).text(dat);
        firstdayofmonthofyear++;

    }

    for (i; i > 0; i--) {
        
        let dat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('D');
        $("#" + i).text(dat);
        firstdayofmonthofyear--;
    }
};

//-----------------
// one year after
//-------------------
function nextyear(){
    year++;
    console.log('year  :: ' + year);
    $('#year').text(year);


    // definition of first day of month to start month calendar (it is a landmark)
    firstdayofmonth = '.' + moment().set({ 'year': year, 'month': monthnb, 'date': 1 }).format('dddd');

    // syntax for jquery 
    onedayclass = "#week1 " + firstdayofmonth;
    console.log( "onedayclass :: " + onedayclass);
    

    idfirstday = $(onedayclass).attr('id');
    console.log( "idfirstday :: " + idfirstday);
    
    // Implementation of days in month calendar
    i = Number(idfirstday);

    let firstdayofmonthofyear = Number(moment().set({ 'year': year, 'month': monthnb, 'date': 1 }).format('DDD'));

    for (i; i <= 42; i++) {

        let dat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('ddd D MMM');
        console.log( "dat : : " + dat);
        
        $("#" + i).text(dat);
        firstdayofmonthofyear++;
    }

    for (i; i > 0; i--) {
        
        let dat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('D');
        $("#" + i).text(dat);
        firstdayofmonthofyear--;
    }
};


//------------------------------------------
// one month ago
//------------------------------------------
function beforemonth(){
    
    year = $('#year').text();
    // console.log( "year in before() :: " + year);
    
    monthnb = monthnb - 1;
    month = moment().set('month', monthnb).format('MMMM');   
    $('#month').text(month);



    // definition of first day of month to start month calendar (it is a landmark)
    firstdayofmonth = '.' + moment().set({ 'year': year, 'month': monthnb, 'date': 1 }).format('dddd');
    // console.log( "firstdayofmonth :: " + firstdayofmonth);
    
    let firstdayofmonthofyear = Number(moment().set({ 'year': year, 'month': monthnb, 'date': 1 }).format('DDD'));

    // console.log("year in before(2) :: " + moment().year(year).dayOfYear(firstdayofmonthofyear).format('ddd D MMM'));
    
    // syntax for jquery 
    onedayclass = "#week1 " + firstdayofmonth;
    // console.log( "onedayclass :: " + onedayclass);
    

    idfirstday = $(onedayclass).attr('id');
    // console.log( "idfirstday :: " + idfirstday);
    
    // Implementation of days in month calendar
    i = Number(idfirstday);
    // console.log("i :: " + i);
    
// let dat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('M');
//         let realmonthnum = dat;
    for (i; i <= 42; i++) {
        
        let dat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('M');
        $("#" + i).text(firstdayofmonthofyear);
        // if(Number(dat) > realmonthnum){
        //     $("#" + i).css("background-color", "rgb(241, 173, 50)");
        // }
        // else {
        //     $("#" + i).css("background-color", "white");
        // }
        firstdayofmonthofyear++;
    }

    for (i; i > 0; i--) {
        
        let dat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('D');
        // realmonthnum = moment().year(year).dayOfYear(firstdayofmonthofyear).format('M');
        // console.log(realmonthnum);
        // console.log("jour : " + dat);
        $("#" + i).text(dat);
        // if(Number(dat) < realmonthnum){
        //     $("#" + i).css("background-color", "rgb(241, 173, 50)");
        // }
        // else {
        //     $("#" + i).css("background-color", "white");
        // }
        
        firstdayofmonthofyear--;
    }
    
}

//----------------
// next month

function nextmonth(){

    year = $('#year').text();
    monthnb = monthnb + 1;
    month = moment().set('month', monthnb).format('MMMM');
    $('#month').text(month);

    // definition of first day of month to start month calendar (it is a landmark)
    firstdayofmonth = '.' + moment().set({ 'year': year, 'month': monthnb, 'date': 1 }).format('dddd');
    let firstdayofmonthofyear = Number(moment().set({ 'year': year, 'month': monthnb, 'date': 1 }).format('DDD'));
            // syntax for jquery
    let onedayclass = "#week1 " + firstdayofmonth;
    let idfirstday = $(onedayclass).attr('id');

    console.log("log de idfirstday :: " + Number(idfirstday));
    console.log("log de onedayclass :: " + onedayclass);
    console.log("log de firstdayofmonthofyear :: " + (firstdayofmonthofyear + 2));
    
    $(onedayclass).text(firstdayofmonth);

    // Implementation of days in month calendar
    let i = Number(idfirstday);
    //let j = 31;

    for (i; i <= 42; i++) {

        let dat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('ddd D MMM');
        console.log( "dat : : " + dat);
        
        $("#" + i).text(dat);
        firstdayofmonthofyear++;
    }

    for (i; i > 0; i--) {
        
        let dat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('D');
        $("#" + i).text(dat);
        firstdayofmonthofyear--;
    }

}


//----------------------
// change year auto
//----------------------

$('#btnmonthbefore').click(function(){
    // console.log('you have tapped on before btn');
    if (($('#month').text()==="décembre")){
        beforeyear();
    };
});

$('#btnmonthnext').click(function(){
    // console.log('you have tapped on next btn');
    if (($('#month').text()==="janvier")){
        nextyear();
    };
});
