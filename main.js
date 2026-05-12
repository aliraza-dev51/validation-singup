const form = document.getElementById("signupForm");

// Error Animation Function
function setError(inputId, errorId, message){

  const input = document.getElementById(inputId);

  // Show Error Message
  document.getElementById(errorId).innerHTML = message;

  // Add Animation Class
  input.classList.add("input-error");

  // Remove Animation After 300ms
  setTimeout(() => {
    input.classList.remove("input-error");
  }, 300);
}

form.addEventListener("submit", function(e){

  e.preventDefault();

  // Clear Errors
  document.querySelectorAll(".error").forEach(error => {
    error.innerHTML = "";
  });

  let isValid = true;

  // First Name
  const firstName = document.getElementById("firstName").value.trim();

  if(firstName === ""){
    setError(
      "firstName",
      "firstNameError",
      "First name is required"
    );

    isValid = false;
  }

  // Last Name
  const lastName = document.getElementById("lastName").value.trim();

  if(lastName === ""){
    setError(
      "lastName",
      "lastNameError",
      "Last name is required"
    );

    isValid = false;
  }

  // Phone Number
  const phone = document.getElementById("phone").value.trim();

  const phonePattern = /^[0-9]{10,15}$/;

  if(phone === ""){

    setError(
      "phone",
      "phoneError",
      "Phone number is required"
    );

    isValid = false;

  } else if(!phonePattern.test(phone)){

    setError(
      "phone",
      "phoneError",
      "Enter valid phone number"
    );

    isValid = false;
  }

  // Age
  const age = document.getElementById("age").value;

  if(age === ""){

    setError(
      "age",
      "ageError",
      "Age is required"
    );

    isValid = false;

  } else if(age < 18){

    setError(
      "age",
      "ageError",
      "Age must be 18 or above"
    );

    isValid = false;
  }

  // Nationality
  const nationality = document.getElementById("nationality").value.trim();

  if(nationality === ""){

    setError(
      "nationality",
      "nationalityError",
      "Nationality is required"
    );

    isValid = false;
  }

  // Gender
  const gender = document.getElementById("gender").value;

  if(gender === ""){

    setError(
      "gender",
      "genderError",
      "Please select gender"
    );

    isValid = false;
  }

  // Email
  const email = document.getElementById("email").value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if(email === ""){

    setError(
      "email",
      "emailError",
      "Email is required"
    );

    isValid = false;

  } else if(!emailPattern.test(email)){

    setError(
      "email",
      "emailError",
      "Enter valid email"
    );

    isValid = false;
  }

  // Password
  const password = document.getElementById("password").value;

  if(password === ""){

    setError(
      "password",
      "passwordError",
      "Password is required"
    );

    isValid = false;

  } else if(password.length < 6){

    setError(
      "password",
      "passwordError",
      "Password must be at least 6 characters"
    );

    isValid = false;
  }

  // Address
  const address = document.getElementById("address").value.trim();

  if(address === ""){

    setError(
      "address",
      "addressError",
      "Address is required"
    );

    isValid = false;
  }

  // Success
  if(isValid){

    alert("Signup Successful!");

    // Redirect Dashboard
    window.location.href = "dashboard.html";
  }

});