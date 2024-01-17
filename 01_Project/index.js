const notify = document.querySelector(".notify");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let add = Number(notify.getAttribute("data-count")) || 0;
  notify.setAttribute("data-count", add + 1);
  if (add == 10) {
    add = "10+";
  }
  if (add === 0) {
    notify.classList.add("add-numb");
  }
});
