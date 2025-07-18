function mostrarOcultarMenu() {
  const list = document.querySelector('.nav-list');
  list.classList.toggle('responsive');
}

function seleccionar() {
  document.querySelector('.nav-list').classList.remove('responsive');
}

const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  themeToggle.innerHTML = document.body.classList.contains('light-theme')
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';
});
