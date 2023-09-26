let firstDiv = document.querySelector(".first-div");
let secondDiv = document.querySelector(".second-div");
let nameRq = document.querySelector(".name-required");
let emailRq = document.querySelector(".email-required");
let msgRq = document.querySelector(".msg-required");
let form = document.querySelector(".form-container");
let email = document.querySelector(".email");
let msg = document.querySelector(".msg");
let button = document.querySelector(".button");
let inp1 = document.querySelector(".inp1");
let inp2 = document.querySelector(".inp2");
let inp3 = document.querySelector(".inp3");

nameRq.style.display = "none";
emailRq.style.display = "none";
msgRq.style.display = "none";

let nameInp = null;
let emailInp = null;
let msgInp = null;

inp1.addEventListener("change", (e) => {
  nameInp = e.target.value;
  console.log("jj");
});

inp1.addEventListener("focusin", (e) => {
  nameRq.style.display = "none";
});

inp2.addEventListener("change", (e) => {
  emailInp = e.target.value;
});

inp2.addEventListener("focusin", (e) => {
  emailRq.style.display = "none";
});

inp3.addEventListener("change", (e) => {
  msgInp = e.target.value;
});
inp3.addEventListener("focusin", (e) => {
  msgRq.style.display = "none";
});

(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("ZVxC0fvY0UaJbpS3z");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let allFieldsGood = false;
    if (nameInp === null || nameInp === "") {
      nameRq.style.display = "block";
      return;
    }
    if (emailInp === null || emailInp === "") {
      emailRq.style.display = "block";
      return;
    }
    if (msgInp === null || msgInp === "") {
      msgRq.style.display = "block";
      return;
    }
    allFieldsGood = true;

    if (allFieldsGood) {
      firstDiv.classList.remove("d-block");
      firstDiv.classList.add("d-none");
      secondDiv.classList.add("d-flex");
      secondDiv.classList.remove("d-none");
      console.log("isgone");
      emailjs.sendForm("contact_service", "contact_form", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    }
  });
