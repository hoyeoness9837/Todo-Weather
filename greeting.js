const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

const saveName = (text) => {
  localStorage.setItem(USER_LS, text);
};

const handleSubmit = (event) => {
  event.preventDefault();
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
};

const askforName = () => {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
};

const paintGreeting = (text) => {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
};
const loadName = () => {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askforName();
  } else {
    paintGreeting(currentUser);
  }
};

const init = () => {
  loadName();
};
init();
