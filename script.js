const form = document.getElementById("contactForm");
const serviceField = form?.querySelector('[name="service"]');
const messageField = form?.querySelector('[name="message"]');
const formStatus = document.getElementById("formStatus");
const languageButtons = document.querySelectorAll(".lang-btn");

const translations = {
  en: {
    navHome: "Home",
    navServices: "Services",
    navAbout: "About us",
    navContact: "Contact",
    heroEyebrow: "Serving La Jolla & surrounding areas",
    heroTitle: "Professional cleaning services in La Jolla",
    heroSubtitle:
      "Professional cleaning services for homes and businesses, with bilingual service in English and Spanish.",
    heroPointReliable: "Reliable",
    heroPointDetailed: "Detailed",
    heroPointTrusted: "Trusted",
    ctaQuote: "Request a quote",
    ctaServices: "View services",
    featureTitleOne: "Quality cleaning",
    featureTextOne: "Detailed cleaning to leave every corner spotless.",
    featureTitleTwo: "Flexible scheduling",
    featureTextTwo: "Scheduling that adapts to your calendar and needs.",
    featureTitleThree: "Safe products",
    featureTextThree: "Effective solutions for a clean and comfortable space.",
    servicesEyebrow: "Our services",
    servicesTitle: "Solutions for every type of space",
    serviceDeepTitle: "Deep cleaning",
    serviceDeepText: "Detailed cleaning for your entire space.",
    serviceMoveTitle: "Move-In / Move-Out Cleaning",
    serviceMoveText: "Cleaning before or after moving.",
    serviceHomeTitle: "Detailed home care",
    serviceHomeText: "Comprehensive cleaning services for your home.",
    serviceCommercialTitle: "Commercial cleaning",
    serviceCommercialText: "Professional cleaning for offices and businesses.",
    serviceRecurringTitle: "Recurring service",
    serviceRecurringText: "Reliable cleaning plans for a consistently fresh space.",
    aboutEyebrow: "Why choose us?",
    aboutTitle: "Trust, order, and visible results.",
    aboutText:
      "At Angel Clean Agency, we combine personal care with professional processes to help keep your spaces clean, organized, and comfortable.",
    aboutListOne: "Reliable and punctual service",
    aboutListTwo: "Quality cleaning materials",
    aboutListThree: "Clear, upfront quotes",
    aboutListFour: "English and Spanish service",
    hoursTitle: "Business hours",
    hoursTextOne: "Monday - Saturday: 8:00 a.m. - 8:00 p.m.",
    hoursTextTwo: "Sunday: By appointment",
    areaTitle: "Service area",
    areaTextOne: "La Jolla and surrounding areas",
    areaTextTwo: "California, USA",
    contactEyebrow: "Contact us",
    contactTitle: "Request your no-obligation quote.",
    contactText:
      "Tell us what you need and we will respond with a proposal tailored to your space.",
    socialLabel: "Visit our social media",
    formNameLabel: "Name",
    formEmailLabel: "Email address",
    formServiceLabel: "Service",
    formMessageLabel: "Message",
    namePlaceholder: "Your name",
    emailPlaceholder: "you@email.com",
    messagePlaceholder: "Tell us more about your project",
    serviceOptionSelect: "Select an option",
    serviceOptionResidential: "Residential cleaning",
    serviceOptionCommercial: "Commercial cleaning",
    serviceOptionDeep: "Deep cleaning",
    serviceOptionMove: "Move-In / Move-Out Cleaning",
    serviceOptionRecurring: "Recurring service",
    formSubmit: "Send email",
    whatsappDivider: "or send us a message directly",
    footerText: "© 2026 ANGEL CLEAN AGENCY. All rights reserved.",
  },
  es: {
    navHome: "Inicio",
    navServices: "Servicios",
    navAbout: "Nosotros",
    navContact: "Contacto",
    heroEyebrow: "Atendiendo La Jolla y alrededores",
    heroTitle: "Servicios profesionales de limpieza en La Jolla",
    heroSubtitle:
      "Servicios profesionales de limpieza para hogares y negocios, con atención bilingüe en inglés y español.",
    heroPointReliable: "Confiable",
    heroPointDetailed: "Detallista",
    heroPointTrusted: "De confianza",
    ctaQuote: "Solicitar cotización",
    ctaServices: "Ver servicios",
    featureTitleOne: "Limpieza de calidad",
    featureTextOne: "Limpieza detallada para dejar cada rincón impecable.",
    featureTitleTwo: "Horario flexible",
    featureTextTwo: "Programación que se adapta a tu calendario y necesidades.",
    featureTitleThree: "Productos seguros",
    featureTextThree: "Soluciones efectivas para un espacio limpio y cómodo.",
    servicesEyebrow: "Nuestros servicios",
    servicesTitle: "Soluciones para todo tipo de espacio",
    serviceDeepTitle: "Limpieza profunda",
    serviceDeepText: "Limpieza detallada para todo tu espacio.",
    serviceMoveTitle: "Limpieza por mudanza",
    serviceMoveText: "Limpieza antes o después de mudarte.",
    serviceHomeTitle: "Cuidado detallado del hogar",
    serviceHomeText: "Servicios completos de limpieza para tu hogar.",
    serviceCommercialTitle: "Limpieza comercial",
    serviceCommercialText: "Limpieza profesional para oficinas y negocios.",
    serviceRecurringTitle: "Servicio recurrente",
    serviceRecurringText: "Planes de limpieza confiables para mantener tu espacio impecable.",
    aboutEyebrow: "¿Por qué elegirnos?",
    aboutTitle: "Confianza, orden y resultados visibles.",
    aboutText:
      "En Angel Clean Agency combinamos atención personalizada con procesos profesionales para mantener tus espacios limpios, ordenados y cómodos.",
    aboutListOne: "Servicio puntual y confiable",
    aboutListTwo: "Materiales de limpieza de calidad",
    aboutListThree: "Cotizaciones claras y transparentes",
    aboutListFour: "Servicio en inglés y español",
    hoursTitle: "Horario de atención",
    hoursTextOne: "Lunes - Sábado: 8:00 a.m. - 8:00 p.m.",
    hoursTextTwo: "Domingo: Por cita",
    areaTitle: "Área de servicio",
    areaTextOne: "La Jolla y áreas cercanas",
    areaTextTwo: "California, EE. UU.",
    contactEyebrow: "Contáctanos",
    contactTitle: "Solicita tu cotización sin compromiso.",
    contactText:
      "Cuéntanos qué necesitas y te responderemos con una propuesta adaptada a tu espacio.",
    socialLabel: "Visita nuestras redes sociales",
    formNameLabel: "Nombre",
    formEmailLabel: "Correo electrónico",
    formServiceLabel: "Servicio",
    formMessageLabel: "Mensaje",
    namePlaceholder: "Tu nombre",
    emailPlaceholder: "tu@correo.com",
    messagePlaceholder: "Cuéntanos más sobre tu proyecto",
    serviceOptionSelect: "Selecciona una opción",
    serviceOptionResidential: "Limpieza residencial",
    serviceOptionCommercial: "Limpieza comercial",
    serviceOptionDeep: "Limpieza profunda",
    serviceOptionMove: "Limpieza por mudanza",
    serviceOptionRecurring: "Servicio recurrente",
    formSubmit: "Enviar correo",
    whatsappDivider: "o envíanos un mensaje directamente",
    footerText: "© 2026 ANGEL CLEAN AGENCY. Todos los derechos reservados.",
  },
};

const serviceDescriptions = {
  en: {
    "Residential cleaning":
      "I am interested in residential cleaning for my home.",
    "Commercial cleaning":
      "I am interested in commercial cleaning for my business or office.",
    "Deep cleaning": "I am interested in a deep cleaning service.",
    "Move-In / Move-Out Cleaning":
      "I am interested in a move-in or move-out cleaning service.",
    "Recurring service": "I am interested in recurring cleaning services.",
  },
  es: {
    "Residential cleaning": "Estoy interesado en limpieza residencial para mi hogar.",
    "Commercial cleaning": "Estoy interesado en limpieza comercial para mi negocio u oficina.",
    "Deep cleaning": "Estoy interesado en un servicio de limpieza profunda.",
    "Move-In / Move-Out Cleaning":
      "Estoy interesado en un servicio de limpieza antes o después de mudanza.",
    "Recurring service": "Estoy interesado en servicios de limpieza recurrentes.",
  },
};

let currentLanguage = localStorage.getItem("aca-lang") || "en";

function applyTranslations(lang) {
  const dictionary = translations[lang] || translations.en;
  const textNodes = document.querySelectorAll("[data-i18n]");

  textNodes.forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (dictionary[key]) {
      element.placeholder = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-option]").forEach((element) => {
    const key = element.dataset.i18nOption;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  document.documentElement.lang = lang;

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (formStatus) {
    const statusText = formStatus.dataset.statusText || "";
    if (statusText) {
      formStatus.textContent = statusText;
    }
  }
}

function getServiceMessage(service) {
  const active = translations[currentLanguage] || translations.en;
  const description = serviceDescriptions[currentLanguage]?.[service];

  if (description) {
    return description;
  }

  return currentLanguage === "es"
    ? "Proporcione más información sobre el servicio de limpieza que necesita."
    : "Please provide more information about the cleaning service you need.";
}

function selectService(service) {
  if (!serviceField || !messageField) return;

  serviceField.value = service;
  messageField.value = getServiceMessage(service);

  document.getElementById("contacto")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  setTimeout(() => messageField.focus(), 500);
}

function updateMessage(service) {
  if (!messageField) return;

  messageField.value = getServiceMessage(service);
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
      const statusMessage =
        currentLanguage === "es"
          ? "Tu aplicación de correo se abrirá con tu solicitud lista para enviar."
          : "Your email app will open with your request ready to send.";
      formStatus.textContent = statusMessage;
      formStatus.dataset.statusText = statusMessage;
    }

    window.location.href =
      `mailto:AngelCleanAgency@gmail.com?subject=${subject}&body=${body}`;
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.lang || "en";
    localStorage.setItem("aca-lang", currentLanguage);
    applyTranslations(currentLanguage);
  });
});

applyTranslations(currentLanguage);