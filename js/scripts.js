function beepBoop(number) {
  var numberArray = [];
  for (var i = 0; i <= number; i++) {
    if (i%3 === 0 && i!==0) {
      numberArray.push("I'm sorry, Dave. I'm afraid I can't do that.");
    }else if (/1/.test(i)) {
      numberArray.push("Boop!");
    }else if(/0/.test(i)) {
      numberArray.push("Beep!");
    }else{
      numberArray.push(i);
    }
  }
  return numberArray
}



$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#input").val());
    var result= beepBoop(number);
    $("#result").text(result);
  });
});
