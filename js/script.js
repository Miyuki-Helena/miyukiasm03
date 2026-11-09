<!-- FIRST SECTION -->
const emailForm = document.querySelector("#email-form");
const emailInput = document.querySelector("#email");
const emailContainer = document.querySelector("#email-container");
const personalInfo = document.querySelector("#personal-info");
const errorMessage = document.querySelector("#message");
emailForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  if (email === "" || !emailInput.checkValidity()) {
    errorMessage.classList.remove("hide");
    return;
  }
  errorMessage.classList.add("hide");
  emailContainer.classList.add("hide");
  personalInfo.classList.remove("hide");
});

<!-- SECOND SECTION -->
const sectionToggleButtons = document.querySelectorAll(".section-toggle-button");

sectionToggleButtons.forEach((button) => {
  const sectionId = button.id.replace("-button", "");
  const summaryContainer = document.querySelector(`#${sectionId}-container`);
  const contentSection = document.querySelector(`#${sectionId}`);

  if (!summaryContainer || !contentSection) return;

  summaryContainer.addEventListener("mouseenter", function () {
    button.classList.remove("hide");
  });

  summaryContainer.addEventListener("mouseleave", function () {
    button.classList.add("hide");
  });

  button.addEventListener("click", function () {
    summaryContainer.classList.add("hide");
    button.classList.add("hide");
    contentSection.classList.remove("hide");
  });
});

document.querySelectorAll(".section-collapse-button").forEach((button) => {
  const sectionId = button.dataset.sectionId;
  const summaryContainer = document.querySelector(`#${sectionId}-container`);
  const contentSection = document.querySelector(`#${sectionId}`);

  if (!summaryContainer || !contentSection) return;

  button.addEventListener("click", function () {
    contentSection.classList.add("hide");
    summaryContainer.classList.remove("hide");
  });
});