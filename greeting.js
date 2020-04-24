//1번째로 생성, 5번째동시
const form = document.querySelector(".js-form");
const input = form.querySelector("input");
const greeting = document.querySelector(".js-greetings");
//4번째 6번째
const USER_LS = "currentUser",
  SHOWING_CN = "showing";

//9번째
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}
//8번째
function handleSubmit(event) {
  event.preventDefault();
  let currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}
//7번째
function askforName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}
//5번째
function paintGreeting(text) {
  form.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
}
//3번째
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askforName();
  } else {
    paintGreeting(currentUser);
  }
}

//2번째로생성

loadName();
