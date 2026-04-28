console.log("TechTuit Taiwan site loaded");

const topBtn = document.getElementById("topBtn");

if (topBtn) {
  window.addEventListener("scroll", function () {
    topBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });

  topBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  });
});