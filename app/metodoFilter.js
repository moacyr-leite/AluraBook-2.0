const btnsFiltrar = document.querySelectorAll(".btn");
btnsFiltrar.forEach((btn) => btn.addEventListener("click", filtrarLivros));

function filtrarLivros() {
  const btn = document.getElementById(this.id);
  let livrosFiltrados =
    btn.value == "disponivel"
      ? filtrarDisponibilidade()
      : filtrarCategoria(btn);
  limparLivros();
  exibirLivros(livrosFiltrados);
  if (btn.value == "disponivel") {
    const valorTotal = calcularValorTotal(livrosFiltrados);
    exibirValorDisponivel(valorTotal);
  }
}
function filtrarCategoria(btn) {
  return livros.filter((livro) => livro.categoria == btn.value);
}

function filtrarDisponibilidade() {
  return livros.filter((livro) => livro.quantidade > 0);
}

function exibirValorDisponivel(valorTotal) {
  elementoValorDisponivel.innerHTML = `
  <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
  </div>
  `;
}
