function beepBoop(number) {
  if (parseInt(number)%3 === 0) {
    number = "I'm sorry, Dave. I'm afraid I can't do that."
  }else if (/1/.test(number)) {
    number = "Boop!"
  }else if(/0/.test(number)) {
    number = "Beep!"
  }
  return number
}



$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = $("#input").val();
    var result= beepBoop(number);
    $("#result").text(result);
  });
});
