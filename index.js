let calculate = document.querySelector("#btn");
calculate.addEventListener("click", bmiCalculate);
function bmiCalculate() {
  let height = document.querySelector("#height").value / 100;
  let weight = document.querySelector("#weight").value;

  let bmi = parseFloat(weight) / parseFloat(height * height);
  document.querySelector("#result").innerHTML = bmi;
  
  if (
    document.querySelector("#aget").value > 120 ||
    document.querySelector("#aget").value < 2
  ) {
    document.querySelector("#age1").innerHTML =
      "provide an age between 2 and 120";
  }

  if (bmi < 16) {
    return (document.querySelector(
      "#result"
    ).innerHTML = `${bmi}, severe thinness`);
  }
  if (bmi > 16 && bmi < 25) {
    return (document.querySelector(
      "#result"
    ).innerHTML = `${bmi}, over weight`);
  }
  if (bmi > 25 && bmi < 40) {
    return (document.querySelector("#result").innerHTML = `${bmi}, obese`);
  }
  if (bmi > 40) {
    return (document.querySelector(
      "#result"
    ).innerHTML = `${bmi}, obese class III`);
  }
  return alert(`your  BMI = ${bmi}`);
}

let clear = document.querySelector("#clr");
clear.addEventListener("click", clearall);

function clearall() {
  document.querySelector("#height").value = "";
  document.querySelector("#weight").value = "";
  document.querySelector("#popup").innerHTML = "";
}
