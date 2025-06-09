function main() {
  lifeInWeeks(56);
}
function lifeInWeeks(age) {
  var timeLeftInYears = 90 - age;

  var timeLeftInMonths = timeLeftInYears * 12;
  var timeLeftInWeeks = timeLeftInMonths * 4;
  var timeLeftInDays = timeLeftInWeeks * 7;
  console.log(
    "You have " +
      timeLeftInDays +
      " days left, " +
      timeLeftInWeeks +
      " weeks, and " +
      timeLeftInMonths +
      " months left"
  );
}
