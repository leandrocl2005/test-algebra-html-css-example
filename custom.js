let currentTab = 0;
showTab(currentTab);


function activateBulletStep(n) {

  const steps = document.getElementsByClassName("step");

  for (let i = 0; i < steps.length; i++) {
    steps[i].className = steps[i].className.replace(" active", "");
  }

  steps[n].className += " active";
}



function showTab(n) {

  const tabs = document.getElementsByClassName("tab");

  tabs[n].style.display = "block";

  if (n == 0) {
    document.getElementById("previousButton").style.display = "none";
  } else {
    document.getElementById("previousButton").style.display = "block";
  }

  if (n == 3) {
    document.getElementById("nextButton").innerHTML = "Enviar";
  } else {
    document.getElementById("nextButton").innerHTML = "Próxima";
  }

  activateBulletStep(currentTab);
}

function goTo(k) {

  if ((currentTab == 3) && (k == 1)) {
    document.getElementById('test-form').submit();
    return false;
  }


  if (k == 1) {
    const isValidForm = validForm();
    if (!isValidForm) {
      return false;
    }
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }

  const tabs = document.getElementsByClassName("tab");

  tabs[currentTab].style.display = "none";

  currentTab = currentTab + k;

  showTab(currentTab);
}

function validForm() {

  let valid = true;

  // pegar a aba atual
  const tabs = document.getElementsByClassName("tab");
  const actualTab = tabs[currentTab];

  // pegar os inputs da aba atual
  const inputs = actualTab.getElementsByTagName("input");

  // verificar se os inputs estão preenchidos
  for (let i = 0; i < inputs.length; i++) {

    if (inputs[i].value == "") {
      inputs[i].className += " invalid";
      valid = false;
    }
  }

  return valid;

}

