var today = dayjs();
$('#specificdate').text(today.format('dddd, MMM YYYY'));


$('.saveBtn').on('click', function () {
  var sibling = $(this).prev().val();
  console.log(sibling)
  var parent = $(this).parent().attr('id');
  console.log(parent)
  localStorage.setItem(parent, sibling);
})

function timeNow() {
  var blockTime = $('.hour')
  var currentTime = dayjs();

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
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

}
timeNow();
