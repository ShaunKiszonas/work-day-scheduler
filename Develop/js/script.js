var timeBlock = $(".time-block");
var currentHour = moment().hour();

// creates time blocks in JavaScript instead of copy pasting HTML Code for each time block
// as well as gives each time block a unique id.
function createTimeBlock() {

    // applies the present class to 9am 
    if (currentHour == 9) {
        timeBlock.find("textarea").addClass("present");
    }

    var meridiem = "am";

    // for loop for cloning the 9am time block and changing the time from 9am to the value of i.
    for (var i = 10; i < 18; i++) {
        var clone = timeBlock.clone();
        var hour = i;
        clone.prop("id", i);

        // once i is greater than 11 all times change to pm
        if (i > 11) {
            meridiem = "pm";
        }

        // once i is greater than 12 it minuses each number by 12 to get a 12 hour format.
        if (i > 12) {
            hour = i - 12;
        }
        clone.find("textarea").val(loadTimeBlock(i));
        clone.find("span").text("\n\n" + hour + meridiem);

        // applies the present or future class based on i's value
        if (currentHour == i) {
            clone.find("textarea").addClass("present");
        } else if (currentHour < i) {
            clone.find("textarea").addClass("future");
        }
        clone.appendTo(".container");
    }
}