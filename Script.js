
// Automatically update the footer year
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

// Smooth reveal animation when sections enter view
const sections = document.querySelectorAll(
  ".about, .services, .contact"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach((section) => {
    section.classList.add("reveal");
    observer.observe(section);
  });
} else {
  sections.forEach((section) => {
    section.classList.add("visible");
  });
}

// Simple active navigation effect
const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});


// WHATSAPP BOOKING ENQUIRY

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {
  bookingForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const phone = document.getElementById("customerPhone").value.trim();
    const service = document.getElementById("cleaningService").value;
    const date = document.getElementById("preferredDate").value;
    const details = document.getElementById("customerMessage").value.trim();

    const message = 
`Hello SparklePro Cleaning!

I would like to request a cleaning quote.

Full Name: ${name}
Email: ${email}
Phone: ${phone}
Cleaning Service: ${service}
Preferred Date: ${date}
Additional Details: ${details || "None"}

Thank you!`;

    // Demo number: replace with the business owner's real WhatsApp number.
    const whatsappNumber = "15551234567";

    const whatsappURL =
      "https://wa.me/" + whatsappNumber +
      "?text=" + encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

    document.getElementById("bookingMessage").textContent =
      "Your enquiry message has been prepared for WhatsApp.";

    bookingForm.reset();
  });
}


// MOBILE NAVIGATION MENU

const menuToggle = document.getElementById("menuToggle");
const mainNavbar = document.getElementById("mainNavbar");

if (menuToggle && mainNavbar) {
  menuToggle.addEventListener("click", function() {
    const isOpen = mainNavbar.classList.toggle("open");

    menuToggle.textContent = isOpen ? "×" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  mainNavbar.querySelectorAll("a").forEach(function(link) {
    link.addEventListener("click", function() {
      mainNavbar.classList.remove("open");
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}
