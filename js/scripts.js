function beepBoop(number) {
  if(number === "0") {
    number = "Beep!"
  }
  return number
}



$(function(){
  $(".formOne").submit(function(event){
    event.preventDefault();
    var number = $("#input").val();
    var result= beepBoop(number);
    $("#result").test(result);
  });
});
