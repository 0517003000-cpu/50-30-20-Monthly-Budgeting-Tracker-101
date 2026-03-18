// Language texts
const texts = {
  en: {
    title: "50-30-20 Monthly Budgeting Tracker",
    incomeLabel: "Monthly Income:",
    needsLabel: "Essential Expenses (Needs):",
    wantsLabel: "Non-Essential Expenses (Wants):",
    savingsLabel: "Savings:",
    notesLabel: "Notes (optional):",
    resultTitle: "Budget Advice:",
    enterDetails: "Enter your details above to get advice.",
    overBudget: "Your expenses exceed your income! Adjust your spending.",
    safeBudget: "Your budget looks good 👍",
    advice: "Advice based on 50-30-20 rule: Needs 50%, Wants 30%, Savings 20%.",
    calculatorLink: "Open Budget Calculator"
  },
  id: {
    title: "Pelacak Anggaran Bulanan 50-30-20",
    incomeLabel: "Pemasukan Bulanan:",
    needsLabel: "Pengeluaran Penting (Kebutuhan):",
    wantsLabel: "Pengeluaran Non-Penting (Keinginan):",
    savingsLabel: "Tabungan:",
    notesLabel: "Catatan (opsional):",
    resultTitle: "Saran Anggaran:",
    enterDetails: "Masukkan data Anda di atas untuk mendapatkan saran.",
    overBudget: "Pengeluaran Anda melebihi pemasukan! Sesuaikan pengeluaran Anda.",
    safeBudget: "Anggaran Anda terlihat aman 👍",
    advice: "Saran berdasarkan aturan 50-30-20: Kebutuhan 50%, Keinginan 30%, Tabungan 20%.",
    calculatorLink: "Buka Kalkulator Anggaran"
  }
};

// Elements
const incomeInput = document.getElementById("income");
const needsInput = document.getElementById("needs");
const wantsInput = document.getElementById("wants");
const savingsInput = document.getElementById("savings");
const notesInput = document.getElementById("notes");
const resultText = document.getElementById("result");
const langRadios = document.querySelectorAll("input[name='lang']");

// Labels
const titleEl = document.getElementById("title");
const incomeLabel = document.getElementById("incomeLabel");
const needsLabel = document.getElementById("needsLabel");
const wantsLabel = document.getElementById("wantsLabel");
const savingsLabel = document.getElementById("savingsLabel");
const notesLabel = document.getElementById("notesLabel");
const resultTitle = document.getElementById("resultTitle");
const calculatorLink = document.getElementById("calculatorLink");

// Function to calculate budget
function calculateBudget() {
  const income = Number(incomeInput.value) || 0;
  const needs = Number(needsInput.value) || 0;
  const wants = Number(wantsInput.value) || 0;
  const savings = Number(savingsInput.value) || 0;
  const notes = notesInput.value.toLowerCase();

  let total = needs + wants + savings;

  // Simple advice logic
  let adviceMsg = currentLang.advice;

  if (notes.includes("borrow") || notes.includes("pinjaman") || notes.includes("utang")) {
    adviceMsg += " ⚠ Note: Borrowing money may affect your budgeting.";
  }

  if (total > income) {
    resultText.innerText = currentLang.overBudget + "\n" + adviceMsg;
  } else {
    resultText.innerText = currentLang.safeBudget + "\n" + adviceMsg;
  }
}

// Language switching
let currentLang = texts.en;

langRadios.forEach(radio => {
  radio.addEventListener("change", () => {
    currentLang = texts[radio.value];
    updateLanguage();
    calculateBudget();
  });
});

function updateLanguage() {
  titleEl.innerText = currentLang.title;
  incomeLabel.innerText = currentLang.incomeLabel;
  needsLabel.innerText = currentLang.needsLabel;
  wantsLabel.innerText = currentLang.wantsLabel;
  savingsLabel.innerText = currentLang.savingsLabel;
  notesLabel.innerText = currentLang.notesLabel;
  resultTitle.innerText = currentLang.resultTitle;
  calculatorLink.innerText = currentLang.calculatorLink;
}

// Auto-calculate when input changes
document.querySelectorAll("input, textarea").forEach(el => {
  el.addEventListener("input", calculateBudget);
});

// Initial advice
resultText.innerText = currentLang.enterDetails;
