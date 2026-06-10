const input = document.querySelector("#bookmarkInput");
const button = document.querySelector("#addBookmarkBtn");
const bookmarkList = document.querySelector("#bookmarkList");

let bookmarkNum = 0;

if (localStorage.getItem("all bookmarks")) {
  bookmarkNum = localStorage.getItem("all bookmarks");
}

const createBookmark = (num, value) => {
  const div = document.createElement("div");
  const link = document.createElement("a");
  const deleteBtn = document.createElement("button");

  link.textContent = value;
  link.href = value;

  div.setAttribute("class", "linkContainer");
  deleteBtn.textContent = "X";

  div.append(link, deleteBtn);
  bookmarkList.append(div);

  deleteBtn.addEventListener("click", () => {
    div.remove();
    localStorage.removeItem(`bookmark ${num}`);
  });
};

const addBookmark = () => {
  if (!input.value) {
    return;
  }
  bookmarkNum++;
  localStorage.setItem(`bookmark ${bookmarkNum}`, `${input.value}`);
  localStorage.setItem(`all bookmarks`, `${bookmarkNum}`);

  createBookmark(bookmarkNum, input.value);

  input.value = "";
};

button.addEventListener("click", addBookmark);

for (let num = 1; num <= localStorage.getItem("all bookmarks"); num++) {
  if (localStorage.getItem(`bookmark ${num}`)) {
    createBookmark(num, localStorage.getItem(`bookmark ${num}`));
  }
}
