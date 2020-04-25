const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");

//getTime이라는 함수를 실행하면, Date라는 함수를 
const getTime = () => {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  //   want to put 0 when the second is less than 10, 그래서 10보다 숫자가 작을때 앞자리에 0을 표시한다.
  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${seconds < 10 ? `0${seconds}` : seconds}`;
};

// getTime이라는 함수를 1초에 한번씩 실행한다
const init = () => {
  getTime();
  setInterval(getTime, 1000);
};
init();