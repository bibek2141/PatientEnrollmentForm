/*Getting form by id*/
const form = document.getElementById("form");
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const email = document.getElementById("email");
const sex = document.getElementById("sex");
const height = document.getElementById("height");
const weight = document.getElementById("weight");
const phone = document.getElementById("phone");
const status = document.getElementById("status");
const street = document.getElementById("street");
const inputCity = document.getElementById("city");
const inputZip = document.getElementById("zip");
const inputCounty = document.getElementById("county");
const inputCountry = document.getElementById("country");
const ContactLastName = document.getElementById("firstRelationshipName");
const ContactName = document.getElementById("lastRelationshipName");
const relationship = document.getElementById("relationship");
const ContactPhone = document.getElementById("ContactPhone");

//Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

//Valid address
function validCharForStreetAddress(input) {
  return ",#-/ !@$%^*(){}|[]\\".indexOf(input) >= 0;
}

//show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

//Check email valid
function checkEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (re.test(email.value.trim())) {
    showSuccess(email.value);
  } else {
    showError(email, "Email is not valid");
  }
}

//Check required fields
function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input);
    }
  });
}

//Check input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} character`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} must be at less than ${max} character`
    );
  } else {
    showSuccess(input);
  }
}

//Get Fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

//Event Listener
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkRequired([
    firstname,
    lastname,
    email,
    sex,
    start,
    height,
    weight,
    phone,
    street,
    inputCity,
    inputZip,
    inputCounty,
    inputCountry,
    ContactName,
    ContactLastName,
    relationship,
    ContactPhone,
  ]);

  //Check email
  checkEmail(email);
  checkLength(firstname, 2, 20);
  checkLength(lastname, 2, 20);
  checkLength(ContactName, 2, 20);
  checkLength(ContactLastName, 2, 20);
  validCharForStreetAddress(street);
});
