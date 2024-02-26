const passwordSecurityQuotes = [
  "I use strong passwords because I don't want hackers to know how boring my life is.",
  "My password is like the universe: ever-expanding and impossible to crack.",
  "I asked my computer to generate a strong password. It replied, 'Sure, how about '123456'?'.",
  "My password is so secure, even I can't remember it.",
  "I changed all my passwords to 'incorrect'. So whenever I forget, it reminds me, 'Your password is incorrect'.",
  "I'm not saying my password is perfect, but I haven't been hacked yet!",
  "My password is my superhero name. It protects me from cyber villains.",
  "Why did the password go to therapy? It had too many issues.",
  "I'm not paranoid about security. I just use 20-character passwords with symbols, numbers, and random capitalization.",
  "My password is like a fingerprint: unique, complex, and impossible to guess.",
  "My password is 'password'. But don't worry, it's case sensitive.",
  "I told my computer I needed a password eight characters long, so why did it give me ********?",
  "I asked my computer for a secure password. It suggested 'password'.",
  "My password is my ex's name. It's always trying to bring me down.",
  "I don't always remember my password, but when I do, I still get it wrong.",
  "My password is so secure, I have to reset it every time I log in.",
  "I changed my password to 'incorrect'. Now, every time I forget it, my computer reminds me, 'Your password is incorrect'.",
  "I don't trust password strength meters. I prefer to rely on my own judgment.",
  "My password is 'admin'. I figure if it's good enough for the network, it's good enough for me.",
  "My password is the last 16 digits of π because it's irrational to memorize more than that.",
];

//accesing dom elements
const inputField = document.getElementById("password");

const copyBtn = document.querySelector("#copy-btn");

const createPasswordBtn = document.getElementById("create-password");

let rangeElement = document.querySelectorAll("input");

let valueFiller = document.getElementById("range-value");

let thoughtP = document.querySelector("P");

// logic - Password creator function;

// thought
thoughtP.innerHTML =
  passwordSecurityQuotes[
    Math.floor(Math.random() * passwordSecurityQuotes.length)
  ];

const passwordObject = {
  numbers: "23456789",
  smallChars: "abcdefghijkmnopqrstuvwxyz",
  capitalChars: "ABCDEFGHJKLMNPQRSTUVWXYZ",
  symbols: '!"£$%^&*()_+`¬@~#?></,:;{}[]',
  passLength: 8,
};

const createPassword = ({
  numbers,
  smallChars,
  capitalChars,
  symbols,
  passLength,
}) => {
  const password = numbers + smallChars + capitalChars + symbols;
  let randomPassword = "";
  for (let index = 0; index < passLength; index++) {
    const randomNumberIndex = Math.floor(Math.random() * password.length);
    randomPassword += password[randomNumberIndex];
  }
  return randomPassword;
};

//event handler

rangeElement[1].addEventListener("input", () => {
  let value = rangeElement[1].value;
  valueFiller.innerText = value;
  passwordObject.passLength = value;
});

createPasswordBtn.addEventListener("click", () => {
  inputField.value = createPassword(passwordObject);
  //console.log(inputField.value);
});

copyBtn.addEventListener("click", async (event) => {
  const copied = await navigator.clipboard.writeText(inputField.value);
  inputField.value = "";
  inputField.placeholder = "Password copied!";
});
