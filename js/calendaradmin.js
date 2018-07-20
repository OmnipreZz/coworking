//--------------------------------
// definition of variables
//--------------------------------


// definition of first day of month to start month calendar (it is a landmark)
let firstdayofmonth = '.' + moment().date(1).format('dddd');

// syntax for jquery
let onedayclass = "#week1 " + firstdayofmonth;

let idfirstday = $(onedayclass).attr('id');

// Implementation of days in month calendar
let i = Number(idfirstday);
let j = 0;

let dat = moment().set('date', j).format('D');
let datmonth = moment().set('date', j).format('M');
// month definition
let month = moment().format('MMMM');
let monthnb = moment().month();





//----------------------------------------------------------------------
// handle of month and year
//----------------------------------------------------------------------

// display current month
$('#month').text(month);

// and year 
let year = moment().year();
$('#year').text(year);

//----------------------
// fonction to year
//----------------------

function changedate() {

    for (i = 0; i <= 42; i++) {
        $("#" + (i)).removeClass("outofmonth").removeAttr("date");
    }

    // display year
    $('#year').text(year);

    // Select and format month
    month = moment().set('month', monthnb).format('MMMM');

    // display month
    $('#month').text(month);

    // definition of first day of month to start month calendar (it is a landmark)
    firstdayofmonth = '.' + moment().set({
        'year': year,
        'month': monthnb,
        'date': 1
    }).format('dddd');


    // syntax of class of cell
    onedayclass = "#week1 " + firstdayofmonth;

    // get id of the first day of month
    idfirstday = $(onedayclass).attr('id');

    // Implementation of days in month calendar
    i = Number(idfirstday);


    let firstdayofmonthofyear = Number(moment().set({
        'year': year,
        'month': monthnb,
        'date': 1
    }).format('DDD'));

    let nextmonthofdat = moment().year(year).dayOfYear(firstdayofmonthofyear).add(1, 'months').format('M');

    // date to push in attribute
    let monthdat;
    let date;
    let daydat;

    for (i; i <= 42; i++) {

        dat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('D');
        daydat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('DD');
        monthdat = moment().year(year).dayOfYear(firstdayofmonthofyear).format('MMM');

        date = moment().set({
            'year': year,
            'month': monthdat,
            'date': dat
        }).format('YYYY' + '-' + 'MM' + '-' + 'DD');

        datmonth = Number(moment().year(year).dayOfYear(firstdayofmonthofyear).format('M'));

        let monthafter = Number(nextmonthofdat);

        // Assign new attribut with the number of month and push date in cell
        $("#" + i).text(dat).attr({
            "nbofmonth": datmonth,
            "date": date
        });

        if (datmonth === monthafter) {
            $("#" + i).addClass("outofmonth");
        }
        firstdayofmonthofyear++;
    }


    i = Number(idfirstday) - 1;

    firstdayofmonthofyear = Number(moment().set({
        'year': year,
        'month': monthnb,
        'date': 1
    }).format('DDD'));

    for (i; i > 0; i--) {
        dat = moment().year(year).dayOfYear(firstdayofmonthofyear - 1).format('D');
        daydat = moment().year(year).dayOfYear(firstdayofmonthofyear - 1).format('DD');
        monthdat = moment().year(year).dayOfYear(firstdayofmonthofyear - 1).format('MMM');
        date = moment().set({
            'year': year,
            'month': monthdat,
            'date': dat
        }).format('YYYY' + '-' + 'MM' + '-' + 'DD');

        $("#" + (i)).text(dat).addClass("outofmonth").attr({
            "nbofmonth": datmonth,
            "date": date
        });
        firstdayofmonthofyear--;
    };

}

function beforeyear() {
    year--;
    changedate();
};

//-----------------
// one year after
//-------------------

function nextyear() {
    year++;
    changedate();
};


//------------------------------------------
// one month ago
//------------------------------------------

function beforemonth() {

    monthnb--;

    if ($('#month').text() === "janvier") {
        monthnb = 11;
        beforeyear();
    } else {
        changedate();
    }
}

//----------------
// next month
//----------------

function nextmonth() {

    monthnb++;

    if ($('#month').text() === "décembre") {
        monthnb = 0;
        nextyear();
    } else {
        changedate();
    }
}

changedate();


