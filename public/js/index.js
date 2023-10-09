// function sendMail() {
//   var params = {
//     name1: document.getElementById("name1").value,
//     name2: document.getElementById("name2").value,
//     name3: document.getElementById("name3").value,
//     city: document.getElementById("city").value,
//     PostCode: document.getElementById("PostCode").value,
//     phone: document.getElementById("phone").value,
//     Street: document.getElementById("Street").value,
//     Nationality: document.getElementById("Nationality").value,
//     State: document.getElementById("State").value,
//     Citizenship: document.getElementById("Citizenship").value,
//     Rcountry: document.getElementById("Rcountry").value,
//   };
//   emailjs
//     .send("service_ews92bq", "template_pn8hh9o", params)
//     .then(function (res) {
//       alert("success!" + res.status);
//     });
// }

// const firstname = document.getElementById("name1");
// const Middlename = document.getElementById("name2");
// const lastname = document.getElementById("name3");
// const city = document.getElementById("city");
// const PostCode = document.getElementById("PostCode");
// const phone = document.getElementById("phone");
// const Street = document.getElementById("Street");
// const State = document.getElementById("State");
// const Citizenship = document.getElementById("Citizenship");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   // validateInputs();
//   console.log(name1, name2, name3, country);
// });
// const setError = (element, message) => {
//   const inputControl = element.parentElement;
//   const errorDisplay = inputControl.queryselector(".error");
//   errorDisplay.innerText = message;
//   inputControl.classList.add("error");
//   inputControl.classList.remove("success");
// };
// const validateInputs = () => {
//   const firstnameValue = firstname.value.trim();
//   const middlename = Middlename.value.trim();
//   const lastname = lastname.value.trim();
//   const city = city.value.trim();
//   const PostCode = PostCode.value.trim();
//   const phone = phone.value.trim();
//   const Street = Street.value.trim();
//   const State = State.value.trim();
//   const Citizenship = Citizenship.value.trim();
// };
// if (firstname === "") {
//   setError(name1, "username is required");
// } else {
// }

// const Middlename = document.getElementById("name2");
// const lastname = document.getElementById("name3");
// const city = document.getElementById("city");
// const PostCode = document.getElementById("PostCode");
// const phone = document.getElementById("phone");
// const Street = document.getElementById("Street");
// const State = document.getElementById("State");
// const Citizenship = document.getElementById("Citizenship");
function sendmail() {
  const data = {
    firstname: document.getElementById("name1").value,
    Middlename: document.getElementById("name2").value,
    lastname: document.getElementById("name3").value,
    city: document.getElementById("city").value,
    PostCode: document.getElementById("PostCode").value,
    phone: document.getElementById("phone").value,
    Street: document.getElementById("Street").value,
    State: document.getElementById("State").value,
    Citizenship: document.getElementById("Citizenship").value,
  };
  console.log(data);
}
