function studentScore(number) {
  if (number >= 80 && number <= 100) result = "A";
  else if (number >= 65 && number <= 79) result = "B+";
  else if (number >= 50 && number <= 64) result = "B";
  else if (number >= 35 && number <= 49) result = "C";
  else if (number > 0 && number <= 34) result = "D";
  else result = "invalid";

  return result;
}

module.exports = studentScore;
