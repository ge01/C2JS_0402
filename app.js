// This program averages 3 test scores.
var num = new Array(3);

// Get three test scores
for( i=0; i<3; i++) {
  num[i] = prompt("Enter grade", "");
}

// Calculate and display the average score
average = ((parseInt(num[0]) + parseInt(num[1]) + parseInt(num[2])) / 3);
document.write("Your average is " + average.toFixed(2) + "<br>");

// If the average is grater than or equal to 90, congratulate the user
if (average >= 90) {
  document.write("Congratulations!" + "<br>");
  document.write("<h1>You got an A!<h1>");
}
