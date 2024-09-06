const hamBurger = document.querySelector(".toggle-btn");

hamBurger.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("expand");
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.getElementById("dropdownMenuButton");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  dropdownToggle.addEventListener("click", function (e) {
    e.stopPropagation(); // Prevent event bubbling to document
    dropdownMenu.classList.toggle("show");
  });

  // Close dropdown if clicked outside
  document.addEventListener("click", function (e) {
    if (
      !dropdownToggle.contains(e.target) &&
      !dropdownMenu.contains(e.target)
    ) {
      dropdownMenu.classList.remove("show");
    }
  });
});
