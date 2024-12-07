// Dados das cartelas de bingo
const bingos = [
  {
    id: 1,
    B: [12, 2, 7, 4, 6],
    I: [21, 22, 27, 17, 19],
    N: [43, 45, 31, 42],
    G: [57, 47, 49, 51, 52],
    O: [62, 64, 66, 67, 72],
  },
  {
    id: 2,
    B: [6, 12, 13, 14, 5],
    I: [18, 19, 30, 22, 17],
    N: [33, 41, 37, 36],
    G: [47, 48, 59, 60, 52],
    O: [75, 66, 72, 63, 74],
  },
  {
    id: 3,
    B: [5, 1, 7, 8, 14],
    I: [23, 22, 20, 29, 16],
    N: [40, 41, 31, 38],
    G: [52, 53, 59, 46, 50],
    O: [74, 61, 65, 67, 68],
  },
  {
    id: 4,
    B: [1, 14, 4, 5, 2],
    I: [17, 19, 20, 29, 16],
    N: [43, 39, 31, 37],
    G: [49, 50, 59, 46, 47],
    O: [74, 61, 62, 64, 65],
  },
  {
    id: 5,
    B: [7, 2, 4, 6, 1],
    I: [22, 19, 16, 17, 21],
    N: [41, 39, 31, 45],
    G: [49, 51, 52, 46, 47],
    O: [67, 66, 62, 64, 61],
  },
  {
    id: 6,
    B: [13, 2, 4, 5, 1],
    I: [17, 19, 20, 28, 16],
    N: [31, 42, 39, 37],
    G: [49, 50, 58, 46, 47],
    O: [73, 61, 62, 64, 65],
  },
  {
    id: 7,
    B: [13, 5, 7, 8, 1],
    I: [22, 16, 23, 28, 20],
    N: [39, 45, 31, 38],
    G: [52, 53, 58, 46, 50],
    O: [73, 61, 65, 67, 68],
  },
  {
    id: 8,
    B: [1, 9, 10, 5, 12],
    I: [25, 26, 27, 17, 18],
    N: [32, 42, 31, 38],
    G: [47, 53, 54, 55, 46],
    O: [69, 70, 61, 72, 68],
  },
  {
    id: 9,
    B: [7, 6, 2, 13, 4],
    I: [21, 22, 28, 17, 19],
    N: [44, 45, 31, 42],
    G: [58, 47, 49, 51, 52],
    O: [62, 64, 66, 67, 73],
  },
  {
    id: 10,
    B: [2, 1, 4, 6, 8],
    I: [23, 16, 21, 17, 19],
    N: [43, 42, 39, 31],
    G: [49, 51, 53, 46, 47],
    O: [68, 61, 62, 66, 64],
  },
];

// Armazena os números digitados
let enteredNumbers = [];

// Renderizar cartelas na tela
function renderBingoTables() {
  const container = document.getElementById("bingo-tables");
  container.innerHTML = "";

  bingos.forEach((bingo) => {
    const bingoDiv = document.createElement("div");
    bingoDiv.className = "bingo";
    bingoDiv.innerHTML = `
        <h3>Cartela ${bingo.id}</h3>
        <p>B: ${bingo.B.join(", ")}</p>
        <p>I: ${bingo.I.join(", ")}</p>
        <p>N: ${bingo.N.join(", ")}</p>
        <p>G: ${bingo.G.join(", ")}</p>
        <p>O: ${bingo.O.join(", ")}</p>
      `;
    container.appendChild(bingoDiv);
  });
}

// Verificar número digitado
function checkNumber() {
  const input = document.getElementById("number-input");
  const number = parseInt(input.value, 10);

  if (!number || enteredNumbers.includes(number)) {
    alert("Número inválido ou já verificado!");
    return;
  }

  enteredNumbers.push(number);

  const results = document.getElementById("results");
  results.innerHTML = `<p>Números verificados: ${enteredNumbers.join(
    ", "
  )}</p>`;

  bingos.forEach((bingo) => {
    let complete = true;

    Object.keys(bingo).forEach((column) => {
      if (column !== "id") {
        bingo[column] = bingo[column].map((num) => {
          if (num === number) return `<span class="highlight">${num}</span>`;
          if (!enteredNumbers.includes(num)) complete = false;
          return num;
        });
      }
    });

    if (complete) {
      results.innerHTML += `<p>Cartela ${bingo.id} está completa!</p>`;
    }
  });

  renderBingoTables();
  input.value = "";
}

// Inicializar
renderBingoTables();
