document.addEventListener("DOMContentLoaded", function () {
  const forms = document.querySelectorAll(".auth-form");

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

      if (!valid) {
        event.preventDefault();
        alert("Please fill in all required fields.");
      }
    });
  });
});
