// Fungsi untuk memuat file komponen
async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`Failed to load ${filePath}`);
    const content = await response.text();
    document.getElementById(elementId).innerHTML = content;
  } catch (error) {
    console.error(error);
  }
}

// Memuat header dan footer ke setiap halaman
document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "../includes/navbar.html");
  loadComponent("sysMenu", "../includes/sysMenu.html");
});
