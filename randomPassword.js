var abcCAPS = "QWERTYUIOPLKJHGFDSAZXCVBNM",
  wordCAPS = "";
for (let i = 0; i < 2; i++) {
  wordCAPS += abcCAPS[Math.round(Math.random() * (abcCAPS.length - 1))];
}

var numbers = "0123456798",
  wordnum = "";
for (let i = 0; i < 2; i++) {
  wordnum += numbers[Math.round(Math.random() * (numbers.length - 1))];
}

var abcreg = "qwertyuioplkjhgfdsazxcvbnm",
  wordreg = "";
for (let i = 0; i < 7; i++) {
  wordreg += abcreg[Math.round(Math.random() * (abcreg.length - 1))];
}

const password = (wordCAPS += wordreg += wordnum);
console.log(password);
