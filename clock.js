const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

const getTime = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  //   want to put 0 when the second is less than 10
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

// function sayhi(){console.log("hi")};
// setInterval(sayhi,3000); <-- every 3sec, execute sayhi function

const init = () => {
  getTime();
  setInterval(getTime, 1000);
};
init();
