document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".auth-form");

  // sumbit button and collects all the hidden forms such as password and username
  forms.forEach((form) => {
    form.addEventListener("submit", function (event) {
      const inputs = form.querySelectorAll(".form-control");
      let valid = true;

      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          valid = false;
          input.style.borderColor = "red";
        }
      });

      // requires all fiels to be posted
      if (!valid) {
        event.preventDefault();
        alert("Please fill in all required fields.");
      }
    });
  });
});
