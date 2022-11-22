// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var today = dayjs();
$('#specificdate').text(today.format('dddd, MMM YYYY'));

$('.saveBtn').on('click', function () {
  var sibling = $(this).prev().val();
  console.log(sibling)
  var parent = $(this).parent().attr('id');
  
  localStorage.setItem(parent, sibling);
  
})

function timeNow() {
  var blockTime = $('.hour')
  console.log(blockTime);
  var currentTime = dayjs();
  console.log(currentTime.$H);

  for (let index = 0; index < blockTime.length; index++) {
    if (blockTime[index].dataset.hour < currentTime.$H) {
      $(blockTime[index]).parent().removeClass('future');
      $(blockTime[index]).parent().removeClass('present');
      $(blockTime[index]).parent().addClass('past');
    }
  
    else if (blockTime[index].dataset.hour == currentTime.$H) {
      $(blockTime[index]).parent().removeClass('future');
      $(blockTime[index]).parent().removeClass('past');
      $(blockTime[index]).parent().addClass('present');
    }
  
    else {
      $(blockTime[index]).parent().removeClass('past');
      $(blockTime[index]).parent().removeClass('present');
      $(blockTime[index]).parent().addClass('future');
    }
    
  }
  
}
timeNow();











$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
