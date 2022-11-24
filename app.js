
function bmiCalculator () {
  var weight = document.getElementById('weight-input').value;
  var height = document.getElementById('height-input').value;

  var bmi = Math.floor(weight / Math.pow(height, 2));
  var bmiResult;
  
  if(bmi < 18.5){
    bmiResult = "Your BMI is " + bmi + ", so you are underweight.";
  }
  
  if(bmi > 18.5){
    bmiResult = "Your BMI is " + bmi + ", so you have a normal weight.";
  }
  
  if(bmi >= 24.9){
    bmiResult = "Your BMI is " + bmi + ", so you are overweight.";
  }



 document.getElementById('result').innerHTML = bmiResult;

 document.getElementById('clear-desc').style.visibility="visible";
 
 
 
}



// function clear(){
//   var textarea = document.getElementById('result');
  

//   // 👇️ clear textarea value
//   textarea.value = '';
// };
    
  
