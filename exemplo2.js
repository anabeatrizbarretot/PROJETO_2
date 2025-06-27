let frutas = [];

function atualizarLista() {
  document.getElementById('listaFrutas').textContent = JSON.stringify(frutas);
}

function adicionarFruta() {
  const input = document.getElementById('frutaInput');
  const valor = input.value.trim();
  if (valor) {
    frutas.push(valor);
    input.value = "";
    atualizarLista();
  }
}

function metodo(acao) {
  if (acao === 'push') {
    const fruta = prompt("Fruta para adicionar:");
    if (fruta) frutas.push(fruta);
  } else if (acao === 'pop') frutas.pop();
  else if (acao === 'shift') frutas.shift();
  else if (acao === 'unshift') {
    const fruta = prompt("Fruta para início:");
    if (fruta) frutas.unshift(fruta);
  }
  atualizarLista();
}

function verificarBanana() {
  const res = frutas.includes('banana') ? "🍌 Banana está no array!" : "🚫 Banana NÃO está no array.";
  document.getElementById('saida').textContent = res;
}

function mostrarIndex(fruta) {
  const i = frutas.indexOf(fruta);
  document.getElementById('saida').textContent = i !== -1
    ? `A fruta '${fruta}' está na posição ${i}.` : `'${fruta}' não foi encontrada.`;
}

function mostrarJoin() {
  document.getElementById('saida').textContent = frutas.join(', ');
}

function mostrarSlice() {
  document.getElementById('saida').textContent = JSON.stringify(frutas.slice(1, 3));
}

function fazerSplice() {
  frutas.splice(1, 1);
  atualizarLista();
  document.getElementById('saida').textContent = "Removido item na posição 1.";
}

function mapMaiusculas() {
  document.getElementById('saida').textContent = JSON.stringify(frutas.map(f => f.toUpperCase()));
}

function filtrarGrandes() {
  document.getElementById('saida').textContent = JSON.stringify(frutas.filter(f => f.length > 4));
}
