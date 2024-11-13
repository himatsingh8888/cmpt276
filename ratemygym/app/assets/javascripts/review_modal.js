document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("reviewModal");
    const openModalButton = document.getElementById("writeReviewButton");
    const closeModalButton = document.querySelector(".close-button");
  
    openModalButton.onclick = function () {
      modal.style.display = "flex";
    };
  
    closeModalButton.onclick = function () {
      modal.style.display = "none";
    };
  
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  });
  