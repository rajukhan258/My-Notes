//START new Date()
function newdate() {
    // Creating a new Date object representing today's date
    let today = new Date();

    // Displaying the current date on the HTML element
    document.getElementById("newdate-output-1").innerHTML = today;
}
//END new Date()




//START new Date(milliseconds)
function milliseconds() {
    // 0 seconds after midnight 1 January 1970 UTC
    let date = new Date(0);
    document.getElementById("milliseconds-output-1").innerHTML = date;
    // 01 january, 1970 UTC + 100000000000milliseconds
    date = new Date(100000000000);
    document.getElementById("milliseconds-output-2").innerHTML = date;
}
//END new Date(milliseconds)




//START new Date(dateString)
function dateString() {
    // Creating date object from date string
    let date = new Date("05 05, 1996 17:00:00");
    document.getElementById("dateString-output-1").innerHTML = date;

    // another string format
    date = new Date("November 11, 1997 01:00:00")
    document.getElementById("dateString-output-2").innerHTML = date;
}
//END new Date(dateString)




//START new Date() with Parameters
function parametersDate() {
    // using all parameters
    let date1 = new Date(2010, 6, 21, 9, 15, 55, 250)

    //// leaving milliseconds
    let date2 = new Date(2010, 6, 21, 9, 15, 55);

    // leaving seconds
    let date3 = new Date(2010, 6, 21, 9, 15);

    // leaving minutes
    let date4 = new Date(2010, 6, 21, 9);

    // leaving hours
    let date5 = new Date(2010, 6, 21);

    // only year and month
    let date6 = new Date(2010, 6);

    document.getElementById("param-output-1").innerHTML = `${date1}<br>${date2} <br> ${date3} <br> ${date4} <br> ${date5} <br> ${date6}`;
    // if you think of removing month too
    // then year will be treated as milliseconds
    // remember this => new Date(milliseconds)
}
//END new Date() with Parameters




//START toDateString():
function dateString() {
    // Create a new Date object representing the current date and time
    const today = new Date();

    // Get the date portion as a string
    const dateStr = today.toDateString();
    document.getElementById("toDateString-output-1").innerHTML = dateStr;
}
//END toDateString():



//START getFullYear():
function getfullyear() {
    const today = new Date();

    // Get the full year
    const year = today.getFullYear();
    document.getElementById("getfullyear-output-1").innerHTML = `Year: ${year}`;
}
//END getFullYear():




//START getMonth()
function getmonth() {
    const today = new Date();

    // Get the month
    const month = today.getMonth();
    document.getElementById("getmonth-output-1").innerHTML = `Month: ${month}`;
}
//END getMonth()




//START getDay()
function getday() {
    const today = new Date();

    // Get the day of the week
    const day = today.getDay();

    // Output the day of the week
    document.getElementById("getday-output-1").innerHTML = `Day: ${day}`;
}
//END getDay():




//START getDate()
function getdate() {
    const today = new Date();

    // Get the day of the month
    const dayOfMonth = today.getDate();
    document.getElementById("getDate-output-1").innerHTML = `Date: ${dayOfMonth}`;
}
//END getDate()




//START  getHours()
function gethours() {
    const today = new Date()

    // Get the hour
    const Hours = today.getHours()

    // Output the hour
    document.getElementById("gethours-output-1").innerHTML = `Hours: ${Hours}`;
}
//END  getHours()




//START getMinutes():
function getminutes() {
    const today = new Date()

    // Get the Minute
    const minute = today.getMinutes()

    // Output the Minute
    document.getElementById("getminutes-output-1").innerHTML = `Minutes: ${minute}`;
}
//END getMinutes():




//START getSeconds():
function getseconds() {
    const today = new Date()

    // Get the Second
    const seconds = today.getSeconds()

    // Output the Second
    document.getElementById("getseconds-output-1").innerHTML = `Seconds: ${seconds}`;
}
//END getSeconds():




//START getMilliseconds():
function getmilliseconds() {
    const today = new Date();

    // Get the milliseconds
    const milliseconds = today.getMilliseconds();

    // Output the milliseconds
    document.getElementById("getmilliseconds-output-1").innerHTML = `Milliseconds: ${milliseconds}`;
}
//END getMilliseconds():




//START getTime()
function gettime() {
    const today = new Date();

    // Get the time in milliseconds since Epoch
    const timeInMillis = today.getTime();
    document.getElementById("gettime-output-1").innerHTML = timeInMillis;
}
//END getTime()




//START setFullYear() 
function setfullyear() {
    const today = new Date();

    // Set the year to 2030
    today.setFullYear(2030);

    // Output the updated date after setting the year
    document.getElementById("setfullyear-output-1").innerHTML = `Year is set to: ${today.toDateString()}.`
}
//END setFullYear() 




//START setMonth():
function setmonths() {
    const today = new Date();

    // Set the month to 11
    today.setMonth(11);

    // Output the updated month after setting the minutes
    document.getElementById("setmonths-output-1").innerHTML = `Month is set to: ${today.getMonth()}.`;
}
//END setMonth():




//START setDate()
function setdate() {
    const today = new Date();

    // Set the day of the month to the 15th
    today.setDate(15);

    // Output the updated date after setting the day
    document.getElementById("setdate-output-1").innerHTML = `Today's date is set to: ${today.toDateString()}.`
}
//END setDate()




//START setHours()
function sethours() {
    const today = new Date();

    // // Set the hour to 10 AM
    today.setHours(10);

    // Output the updated date after setting the hour
    document.getElementById("sethours-output-1").innerHTML = `Hour is set to: ${today.getHours()} AM.`
}
//END setHours()




//START setMinutes() 
function setminutes() {
    const today = new Date();

    // Set the minutes to 59
    today.setMinutes(59);

    // Output the updated date after setting the minutes
    document.getElementById("setminutes-output-1").innerHTML = `Minutes is set to: ${today.getMinutes()}.`
}
//END setMinutes() 




//START setSeconds():
function setseconds() {
    const today = new Date();

    // Set the month to 11
    today.setSeconds(59);

    // Output the updated month after setting the minutes
    document.getElementById("setseconds-output-1").innerHTML = `Seconds is set to: ${today.getSeconds()}.`;
}
//END setSeconds():





//START  setMilliseconds():
function setmilliseconds() {
    const today = new Date();

    // Set the milliseconds to 500
    today.setMilliseconds(500);

    // Output the updated date after setting the milliseconds
    document.getElementById("setmilliseconds-output-1").innerHTML = `Milliseconds is set to: ${today.getMilliseconds()}.`
}
//END  setMilliseconds():





//START setTime()
function settime() {
    const today = new Date();

    // Set the time based on milliseconds (here: November 21, 2023)
    today.setTime(1700581478572);
    document.getElementById("settime-output-1").innerHTML = today.getTime();
}
//END setTime()




//START Date.now()
function datenow(){
    // Get the current timestamp in milliseconds
    const currentTime = Date.now();
    // Display it as a string
    document.getElementById("datenow-output-1").innerHTML = currentTime;
}
//END Date.now()





//START getTimezoneOffset()
function timezoneoffset(){
    const today = new Date();   // Create a new Date object representing the current date and time

    // Get the time zone offset in minutes
    const offsetInMinutes = today.getTimezoneOffset();
    document.getElementById("zoneOffset-output-1").innerHTML = offsetInMinutes;
}
//END getTimezoneOffset()




