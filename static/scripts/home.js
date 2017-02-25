document.getElementById('buttonChangeColor').addEventListener('click', changeColor);
document.getElementById('buttonHideAll').addEventListener('click', hideAll);

function validateForm(){
  console.log("validating form");
  var name = document.getElementById('nameInput').value;
  var species = document.getElementById('speciesInput').value;
  var age = document.getElementById('ageInput').value;

  if (!name.length || !species.length || !age.length){
    alert('fields must not be blank');
    return false;
  }

  if (age !== parseInt(age, 10)){
    alert('age must be an integer');
    return false;
  }

  return true;
}

function changeColor(){
  var body = document.getElementById('body');
  var newColor = document.getElementById('colorInput').value;

  if (!newColor.length){
    alert('specify a color in hex')
  }
  else {
    body.style.color = newColor;
  }
}

function hideAll(){
  var body = document.getElementById('body');
  body.style.display = 'none';
}
