function bmi(weight, height) {
  const x = weight / Math.pow(height, 2);
  
  if(x <= 18.5) {
    return 'Underweight';
  }
  else if(x <= 25) {
    return 'Normal';
  }
  else if(x <= 30) {
    return 'Overweight';
  }
  else{
    return 'Obese';
  }
}
