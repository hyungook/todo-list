const itmes = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__btn");

function onAdd() {
  // 1. 사용자가 입력한 텍스트를 받아옴
  const text = input.value;
  if (text === "") {
    input.focus();
    return;
  }
  //   console.log(input.value);
  // 2. 새로운 아이템을 만듬(텍스트 + 삭제 버튼)
  const item = createItem(text);
  // 3. items 컨테이너안에 새로 만든 아이템을 추가한다
  itmes.appendChild(item);
  // 4. 새로 추가된 아이템으로 스크롤링
  item.scrollIntoView({ block: "center" });
  // 5. 인풋을 초기화 한다.
  input.value = "";
  input.focus();
}

let id = 0; // UUID(유니크 아이디가 좋음)
function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "item__row");
  itemRow.setAttribute("data-id", id);

  itemRow.innerHTML = `
    <li class="item_row">
        <div class="item">
          <span class="item_name">${text}</span>
          <button class="item__delete">
            <i class="fas fa-trash-alt" data-id=${id}></i>
          </button>
        </div>
      <div class="item__divider"></div>
    </li>
  `;
  
  id++;
  return itemRow;
}

addBtn.addEventListener("click", () => {
  onAdd();
});
input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});

itmes.addEventListener("click", (event) => {
  // if (event.target.nodeName === "I") {
  //   console.log("he");
  // }

  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    toBeDeleted.remove();
    console.log("hehe");
  }
});
