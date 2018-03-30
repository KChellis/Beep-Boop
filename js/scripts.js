function beepBoop(number, name) {
  var numberArray = [];
  for (var i = 0; i <= number; i++) {
    if (i === 42) {
      numberArray.push("Life the universe and everything");
    }else if (i%4 === 0 && i !== 0) {
      numberArray.push("I am the walrus");
    }else if (i%3 === 0 && i!==0) {
      numberArray.push("I'm sorry, " + name + ". I'm afraid I can't do that.");
    }else if (/5/.test(i)) {
      numberArray.push('<img src="img/five.png">');
    }else if (/2/.test(i)) {
      numberArray.push('<img src="img/two.png">')
    }else if (/1/.test(i)) {
      numberArray.push("Boop!");
    }else if(/0/.test(i)) {
      numberArray.push("Beep!");
    }else{
      numberArray.push(i);
    }
  }
  return numberArray;
}
function reverseResult(array){
  var reverse = [];
  for (var i = (array.length-1); i >= 0; i--) {
    reverse.push(array[i]);
  }
  return reverse;
}


$(function(){
  $("#formOne").submit(function(event){
    event.preventDefault();
    $(".results").show();
    $("#tluser").hide();
    $("#result").text("");
    $("#tluser").text("");
    var number = parseInt($("#number").val());
    var name = $("#name").val();
    var result= beepBoop(number, name);
    var reverse= reverseResult(result);
    for (var i = 0; i < result.length; i++) {
      if (i !== (result.length-1)) {
        $("#result").append(result[i] + ", ");
      }else {
        $("#result").append(result[i] + ".");
      }
    }
    for (var i = 0; i < reverse.length; i++) {
      if (i !== (reverse.length-1)) {
        $("#tluser").append(reverse[i] + ", ");
      }else {
        $("#tluser").append(reverse[i] + ".");
      }
    }
  });
  $("#reverse").click(function(){
    $("#result").toggle();
    $("#tluser").toggle();
  });
  $("#clear").click(function(){
    location.reload();
  });
});
