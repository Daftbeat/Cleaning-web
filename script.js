const form = document.getElementById("contactForm");
const serviceField = form?.querySelector('[name="service"]');
const messageField = form?.querySelector('[name="message"]');
const formStatus = document.getElementById("formStatus");

const serviceDescriptions = {
  "Residential cleaning":
    "I am interested in residential cleaning for my home.",
  "Commercial cleaning":
    "I am interested in commercial cleaning for my business or office.",
  "Deep cleaning":
    "I am interested in a deep cleaning service.",
  "Move-In / Move-Out Cleaning":
    "I am interested in a move-in or move-out cleaning service.",
  "Recurring service":
    "I am interested in recurring cleaning services.",
};

function selectService(service) {
  if (!serviceField || !messageField) return;

  serviceField.value = service;
  messageField.value =
    serviceDescriptions[service] ||
    "Please provide more information about the cleaning service you need.";

  document.getElementById("contacto")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setTimeout(() => messageField.focus(), 500);
}

function updateMessage(service) {
  if (!messageField) return;

  messageField.value =
    serviceDescriptions[service] ||
    "Please provide more information about the cleaning service you need.";
}

document.querySelectorAll("[data-service]").forEach((serviceLink) => {
  serviceLink.addEventListener("click", (event) => {
    event.preventDefault();
    selectService(serviceLink.dataset.service);
  });
});

if (serviceField && messageField) {
  serviceField.addEventListener("change", () => {
    updateMessage(serviceField.value);
  });
}

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const name = data.get("name")?.toString().trim() || "Client";
    const email = data.get("email")?.toString().trim() || "";
    const service = data.get("service")?.toString().trim() || "General inquiry";
    const message = data.get("message")?.toString().trim() || "";

    const subject = encodeURIComponent(`Service request: ${service}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nRequested service: ${service}\n\nMessage:\n${message}`
    );

    if (formStatus) {
      formStatus.textContent =
        "Your email app will open with your request ready to send.";
    }

    window.location.href =
      `mailto:AngelCleanAgency@gmail.com?subject=${subject}&body=${body}`;
  });
}