
function controlaBanner(id, inicio, fim) {
  const banner = document.getElementById(id);
  const agora = new Date();

  if (agora >= inicio && agora < fim) {
    banner.classList.add("liberado");
    banner.classList.remove("bloqueado");
  } else {
    banner.classList.add("bloqueado");
    banner.classList.remove("liberado");
  }
}

const ano = new Date().getFullYear();

// 🎃 Halloween
controlaBanner(
  "bannerHalloween",
  new Date(`${ano}-10-24`),
  new Date(`${ano}-11-01`)
);

// 🎄 Natal
controlaBanner(
  "bannerNatal",
  new Date(`${ano}-12-18`),
  new Date(`${ano}-12-26`)
);

// 🎆 Ano Novo
controlaBanner(
  "bannerAnoNovo",
  new Date(`${ano}-12-24`),
  new Date(`${ano + 1}-01-01`)
);

