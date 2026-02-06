const iban = "DE07100110012623136544";
const name = "Mariano Bustos";
const bic = "NTSBDEB1XXX";

function generateQR(amount) {
  const data = `BCD
001
1
SCT
${bic}
${name}
${iban}
EUR${amount}

Support street music`;

  const qrUrl = "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" + encodeURIComponent(data);
  document.getElementById("qrContainer").innerHTML = `<img src="${qrUrl}" alt="QR Code"/>`;
}

function generateCustomQR() {
  const amount = document.getElementById("customAmount").value;
  if (!amount || amount <= 0) {
    alert("Enter a valid amount / Introduz um valor válido");
    return;
  }
  generateQR(amount);
}
