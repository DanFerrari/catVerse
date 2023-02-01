let bottomMenu = document.getElementById("icon");
let bottomClose = document.getElementById("icon-x");
let menu = document.getElementsByClassName("list")[0];

// Adiciona um evento ao redimensionar a janela
window.addEventListener('resize', () => {
  // Armazena a largura da janela
  let width = window.innerWidth;

  // Verifica a largura da tela e altera o código de acordo
  if (width <= 425) {
    menu.style.display = "none";
    bottomMenu.style.display = "block";
    bottomClose.style.display = "none";
  } else {
    menu.style.display = "flex";
    bottomMenu.style.display = "none";
    bottomClose.style.display = "none";
  }
});

// Adiciona um evento de clique ao botão de menu
bottomMenu.addEventListener("click", function()  {
  menu.style.display = "flex";
  bottomMenu.style.display = "none";
  bottomClose.style.display = "block";
});

// Adiciona um evento de clique ao botão de fechar
bottomClose.addEventListener('click', () => {
  menu.style.display = "none";
  bottomMenu.style.display = "block";
  bottomClose.style.display = "none";
});