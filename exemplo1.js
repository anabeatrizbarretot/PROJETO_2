document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const valores = [];
  for (let i = 1; i <= 5; i++) {
    const valor = document.getElementById(`valor${i}`).value.trim();
    if (!valor) return alert(`Valor ${i} está vazio.`);
    valores.push(valor);
  }
  const blob = new Blob([valores.map((v, i) => `Valor ${i + 1}: ${v}`).join("\n")], { type: "text/plain;charset=utf-8" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "valores.txt";
  link.click();
});
