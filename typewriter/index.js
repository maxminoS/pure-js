const text = document.getElementById("text");
let i = 0;
let isTyping = true;
let timeInterval = 400;

const typeOut = (typeText = "Hello.") => {
  if (isTyping) {
    text.innerHTML += typeText.charAt(i);
    i++;
    isTyping = i == typeText.length ? false : true;
  } else {
    text.innerHTML = text.innerHTML.slice(0, i - 1);
    i--;
    isTyping = i == 0 ? true : false;
  }
};

setInterval(typeOut, timeInterval);
