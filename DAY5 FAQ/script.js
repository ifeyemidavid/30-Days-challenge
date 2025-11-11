const accordions = document.querySelectorAll("details");

accordions.forEach((accordion) => {
  accordion.addEventListener("toggle", () => {
    if (accordion.open) {
      accordions.forEach((other) => {
        if (other !== accordion) {
          other.removeAttribute("open");
        }
      });
    }
  });
});
