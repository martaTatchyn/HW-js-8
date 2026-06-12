const username = document.querySelector("#username");
const password = document.querySelector("#password");
const btn = document.querySelector("#saveBtn");

if (localStorage.username) {
  username.value = localStorage.username;
}

if (localStorage.password) {
  password.value = localStorage.password;
}

const saveContent = (event) => {
  localStorage.setItem(`${event.target.id}`, `${event.target.value}`);
  console.log(event.target.id);
};

username.addEventListener("input", saveContent);
password.addEventListener("input", saveContent);

btn.addEventListener("click", () => {
  username.value = "";
  password.value = "";
  localStorage.username = "";
  localStorage.password = "";
});
