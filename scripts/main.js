const toggler = document.getElementById("sidebarToggleTop ");
const sidebar = document.getElementById("sidebar");
const content = document.getElementById("main-content");

function sidebarToggler() {
  if (sidebar.style.display == "none") {
    sidebar.style.display = "block";
    sidebar.style.width = "50%";
    content.style.width = "50%";
    sidebar.style.zIndex = "99999";
  } else {
    sidebar.style.display = "none";
    content.style.width = "100%";
  }
}
