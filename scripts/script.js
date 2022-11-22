
let userData = ["email", "password"];
  let userJSON = {
    fname: "Lane",
    lname: "Schmidt",
    email: "lschmidt@una.edu",
    bet:   "$10,000,000",
    phone: "123-456-7890"
  };

  $("#loadData").click(() => {

    $("#fname").val(userJSON.fname);

    $("#lname").val(userJSON.lname);

    $("#email").val(userJSON.email);

    $("#bet").val(userJSON.bet);

    $("#phone").val(userJSON.phone);
  });


  // getting submit button after verification
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("submitButton");
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  // radio button for dependant input
  $("input[type=radio]").on("change", function () {

    let radioChoice = $("input[type=radio]:checked").val(); // Yes or No
    let newList = getAge(radioChoice);

    let optionList = "";

    for (i = 0; i < newList.length; i++) {
      optionList += `<option value=" ${newList[i]} ">${newList[i]} </option>`;
    }
    $("#horseSelect").empty().append(optionList);
  });

  $("#submitForm").on("click", (e) => {
    e.preventDefault();

    // get data from an input

    let dataStuff = `{ "letterSelected:" " ${$(
      "input[type=radio]:checked"
    ).val()} " }`;

    console.log(dataStuff);
  });

function getAge(choice) {

  let yesArray = ["Choose the horse you would like to bet on!", "Always Dreaming", "Nyquist", "American Pharoah", "California Chrome"];
  let noArray= ["You are not old enough to place bets!"]

  if (choice === "yes") {
    return yesArray; }
  else if (choice === "no") {
    return noArray; } 
  else {
    return ["Thank you"];
  }
}

$(document).ready(function () {
  $("#greetingOutput").text("");

  $("#submitButton").click(function () {
    $("#greetingOutput").text("Hello, " + $("#fname").val() + "! Thank you for placing your bet today for the Kentucky Derby! You bet " + $("#bet").val() + " on " + $("#horseSelect").val() + "!");
  });
});

