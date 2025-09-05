// Smooth Fade-In Animation + Skill Bars
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".fade-in");
  const skillFills = document.querySelectorAll(".skill-fill");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");

        // Animate skill bars when skills section comes into view
        if (entry.target.id === "skills") {
          skillFills.forEach(fill => {
            fill.style.width = getComputedStyle(fill).getPropertyValue("width"); // triggers CSS width
          });
        }

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => {
    observer.observe(section);
  });

  // Smooth Scroll for Navbar
  document.querySelectorAll("nav ul li a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
});
