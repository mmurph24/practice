$(document).ready(function(){

  var isApproved = false;

  var approvedBoyNames = ["james", "john", "robert", "michael", "william", "david",
  "richard", "joseph", "thomas", "charles"];

  var approvedGirlNames = ["mary", "patricia", "jennifer", "elizabeth", "linda", "barbara",
  "susan", "jessica", "margaret", "sarah"];

  var approvedNames = [approvedBoyNames, approvedGirlNames];

  function checkName (nameList) {
    var userName = $('#nameField').val().toLowerCase();

    for (var i = 0; i < nameList.length; i++) {
      for (var j = 0; j < nameList[i].length; j++) {
        if (userName === nameList[j]) {
          isApproved = true;
        } else {
          alert(nameList[i]); // for debugging
        }
      }
    }
    if (isApproved === true) {
      $("#results-span").text($('#nameField').val() + " is acceptable.");
    } else {
      $("#results-span").text($('#nameField').val() + " is not approved.");
    }
  }

  $("#name-submit").click(function() {
    checkName(approvedNames);
  });
});
