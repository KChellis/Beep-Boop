function beepBoop(number) {
  if (number === "3") {
    number = "I'm sorry, Dave. I'm afraid I can't do that."
  }else if (number === "1") {
    number = "Boop!"
  }else if(number === "0") {
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
