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

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log("submitted");
//   console.log(emailRq);
//   let allFieldsGood = false;
//   if (nameInp === null || nameInp === "") {
//     nameRq.style.display = "block";
//     return;
//   }
//   if (emailInp === null || emailInp === "") {
//     emailRq.style.display = "block";
//     return;
//   }
//   if (msgInp === null || msgInp === "") {
//     msgRq.style.display = "block";
//     return;
//   }
//   allFieldsGood = true;

//   if (allFieldsGood) {
//     console.log("isgone");
//   }
// });

// ================================

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // generate a five digit number for the contact_number variable
    // this.contact_number.value = (Math.random() * 100000) | 0;
    // these IDs from the previous steps

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

// =====================================

// name1.addEventListener("change", (e) => {
//   nameInp = e.target.value;
//   console.log(nameInp);
//   nameRq.style.display = "none";
// });
// email.addEventListener("change", (e) => {
//   emailInp = e.target.value;
//   console.log(emailInp);
//   emailRq.style.display = "none";
// });
// msg.addEventListener("change", (e) => {
//   msgInp = e.target.value;
//   console.log(msgInp);
//   msgRq.style.display = "none";
// });
// button.addEventListener("click", () => {
//   if (nameInp == null) {
//     nameRq.style.display = "block";
//   }
//   if (emailInp == null) {
//     emailRq.style.display = "block";
//   }
//   if (msgInp == null) {
//     msgRq.style.display = "block";
//   } else {
//     firstDiv.classList.remove("d-flex");
//     firstDiv.classList.add("d-none");
//     secondDiv.classList.add("d-flex");
//     secondDiv.classList.remove("d-none");
//   }
// });

// =========================================

// window.onload = function () {
//   document
//     .getElementById("contact-form")
//     .addEventListener("submit", function (event) {
//       event.preventDefault();
//       // generate a five digit number for the contact_number variable
//       this.contact_number.value = (Math.random() * 100000) | 0;
//       // these IDs from the previous steps
//       emailjs.sendForm("contact_service", "contact_form", this).then(
//         function () {
//           console.log("SUCCESS!");

//         },
//         function (error) {
//           console.log("FAILED...", error);
//         }
//       );
//     });
// };
