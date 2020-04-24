const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

/*아래함수는 투두리스트에서 각 텍스트의 태그의 parent 를 parentNode로 가져와서 removeChild로 없애는 기능을 추가함 그리고 filter()은 array에서 ()함수를 통과해서 조건에 맞는 아이템으로 다시 새로운 array를 만들어준다. 변경사항을 저장하기위해 세이브투두 함수로 보내준다.*/
function deleteToDo(event) {
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function (toDo) {
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}
//로컬스토리이제 오브젝트를 스트링으로 바꿔준뒤 저장한다.
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}
// 각각을 li, 지우는 버튼, 새로운 1식 늘어나는 숫자로로된 아이디를 달아주고, 지우는 버튼을 클릭하면 위에 지우는 함수를 실행하도록하고, appendchild로 ()안의 태그를 붙인 아이템을 리스트로 덧붙여 리스트에 추가출력한다. 마지막으로는 그렇게 생성된 새 아이디와 텍스트를 묶어 todoobj란 array안에 넣어준다. 그리고 그것을 다시 toDos라는 array에 push(덧붙여주고) 마지막으로 위에 저장함수를 이용해 로컬스토리지에 저장해준다.
function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerHTML = "&#x274C;";
  span.innerText = text;
  delBtn.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(delBtn);
  toDoList.appendChild(li);
  li.id = newId;
  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDos(); /*위에 푸쉬다음에 위치해야 푸쉬된것을 저장한다*/
}

// 서브밋 버튼을 눌렀을때 다 없어지지 않고, 로컬스토리지에 내가 쓴 것을 넣어준다. 그리고 넣은뒤에는 입력창에 아무것도 띄우지 않는다.
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}
/*아래 함수에서 forEach로 array안에있는 각각의 엘리멘트에 function 을 사용해준다 만약에 로컬스토리지에 아무것도 없는지 체크하고, 즉 눌(빈공간) 이 아니면,parse를 이용해 로컬스토리지에 있는 저장된 string을  object로 바꿔 꺼내준다 . 그리고 그 오브젝트를 꾸며주는 페인트 함수로 보내준다*/
function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function (toDo) {
      paintToDo(toDo.text);
    });
  }
}

//클릭하면 바로위에 함수와 그다음위의 함수가 차례로 시작되도록한다.
function init2() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}
init2();
// 로직 플로우 : init->loadToDos/handleSubmit->painToDO-->SaveToDos귀결<--deleteToDo
