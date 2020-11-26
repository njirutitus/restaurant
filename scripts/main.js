const toggler = document.getElementById("sidebarToggleTop ");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("main-content");

function sidebarToggler() {
  if (sidebar.style.display == "none") {
    sidebar.style.display = "block";
    sidebar.style.width = "100%";
    sidebar.style.zIndex = "99999";
  } else {
    sidebar.style.display = "none";
  }
}
