//----------------------------------
// display calendar of this moment
//--------------------------------



// definition of first day of month to start month calendar (it is a landmark)
let firstdayofmonth = '.' + moment().date(1).format('dddd');

    // syntax for jquery
let onedayclass = "#week1 " + firstdayofmonth;

let idfirstday = $(onedayclass).attr('id');

// Implementation of days in month calendar
let i = Number(idfirstday);
let j = 0;

let dat = moment().set('date',j).format('D');
let datmonth = moment().set('date',j).format('M');
// month definition
let month = moment().format('MMMM');
let monthnb = moment().month();
console.log(monthnb);
console.log(month);



// for (i; i > 0; i--) {
//     dat = moment().set('date',j).format('D');
//     $("#" + (i-1)).text(dat).addClass("outofmonth");
//     j--;
// };

// i = Number(idfirstday);
// j = 1;
// let monthofdat = moment().set('date',j).format('M');

// for (i; i <= 42; i++) {

//     dat = moment().set('date',j).format('D');

//     datmonth = Number(moment().set('date',j).format('M'));
//     let monthafter = Number(monthofdat) + 1;

//     // Assign new attribut with the number of month (not necessary) and push date in cell
//     $("#" + i).text(dat).attr("nbofmonth", datmonth);

//     if (datmonth === monthafter){
//         $("#" + i).addClass("outofmonth");
//     }
//     j++;
// }

    

//-------------------------------------------------------------------------
// handle of month and year
// -----------------------------------------------------------------------


// console.log( moment().month() - 1 );
$('#month').text(month);

// and year 
let year = moment().year();
$('#year').text(year);

//----------------------
// fonction to year
//----------------------

function changedate() {

    for (i = 0; i <= 42; i++) {
        $("#" + (i)).removeClass("outofmonth");
    }

    $('#year').text(year);

    month = moment().set('month', monthnb).format('MMMM');

    $('#month').text(month);

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

    let nextmonthofdat = moment().year(year).dayOfYear(firstdayofmonthofyear).add(1, 'months').format('M');

    for (i; i <= 42; i++) {

        dat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('D');

        
        datmonth = Number(moment().year(year).dayOfYear(firstdayofmonthofyear).format('M'));

        let monthafter = Number(nextmonthofdat);
        
        // Assign new attribut with the number of month and push date in cell
        $("#" + i).text(dat).attr("nbofmonth", datmonth);

        if (datmonth === monthafter){
            $("#" + i).addClass("outofmonth");
        }

        firstdayofmonthofyear++;

    }
    

    i = Number(idfirstday)-1;

    firstdayofmonthofyear =  Number(moment().set({ 'year': year, 'month': monthnb, 'date': 1 }).format('DDD'));

    for (i; i > 0; i--) {
        dat = moment().year(year).dayOfYear(firstdayofmonthofyear-1).format('D');
        $("#" + (i)).text(dat).addClass("outofmonth");
        firstdayofmonthofyear--;
        
    };

}

function beforeyear(){
    year--;
    changedate();
};

//-----------------
// one year after
//-------------------

function nextyear(){
    year++;
    changedate();
};


//------------------------------------------
// one month ago
//------------------------------------------

function beforemonth() {

    monthnb--;
    
    if ($('#month').text()==="janvier"){
        monthnb = 11;
        beforeyear();
    } else {
        changedate();
    }
}

//----------------
// next month
//----------------

function nextmonth(){

    monthnb++;

    if ($('#month').text()==="décembre"){
        monthnb = 0;
        nextyear();
    } else {
        changedate();
    }
}

changedate();