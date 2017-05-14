$(document).ready(function(){

  var isApproved = false;

  // The 10 most common boys names of the past 100 years

  var approvedBoyNames = ["james", "john", "robert", "michael", "william", "david",
  "richard", "joseph", "thomas", "charles"];

  // The 10 most common girls names of the past 100 years

  var approvedGirlNames = ["mary", "patricia", "jennifer", "elizabeth", "linda", "barbara",
  "susan", "jessica", "margaret", "sarah"];

  var approvedNames = [approvedBoyNames, approvedGirlNames];

  // Check user input against list of approved names

  function checkName (nameList) {
    var userName = $('#nameField').val().toLowerCase();

    for (var i = 0; i < nameList.length; i++) {
      for (var j = 0; j < nameList[i].length; j++) {
        if (userName === nameList[i][j]) {
          isApproved = true;
        }
      }
    }
    if (isApproved === true) {
      $("#results-span").text($('#nameField').val() + " is acceptable.");
      isApproved = false;
    } else {
      $("#results-span").text($('#nameField').val() + " is not approved.");
    }
  }

  // Run check on form submission

  $("#name-submit").click(function() {
      checkName(approvedNames);
  });
});
