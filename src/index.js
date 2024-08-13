import "./styles/main.scss";

const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const inputForm = form.querySelector("input");
  const listPending = document.getElementById("list_pending");
  const listFinished = document.getElementById("list_finished");

  // Criação do item
  const item = document.createElement("li");
  const text = document.createElement("p");
  text.textContent = inputForm.value.trim();
  //

  const iconContainer = document.createElement("div");
  iconContainer.classList.add("container-icon");

  // Icon Finised
  const iconFinished = document.createElement("i");
  iconFinished.className = "bi bi-check-circle green";

  iconFinished.addEventListener("click", () => {
    text.classList.add("finished");
    item.removeChild(iconContainer);
    listPending.removeChild(item);
    listFinished.insertBefore(item, listFinished.children[0])
  });
  //

  // Icon Edit
  const iconEdit = document.createElement("i");
  iconEdit.className = "bi bi-pencil-square";

  iconEdit.addEventListener("click", () => {
    const inputEdit = document.createElement("input");
    inputEdit.value = text.textContent;

    const buttonConfirm = document.createElement("button");
    buttonConfirm.textContent = "Confirmar";

    const buttonCancell = document.createElement("button");
    buttonCancell.textContent = "Cancelar";

    const reset = () => {
      text.removeAttribute('style')
      iconContainer.classList.remove('inactive')
      item.removeChild(inputEdit)
      item.removeChild(buttonConfirm)
      item.removeChild(buttonCancell)
    }

    buttonConfirm.addEventListener('click', () => {
      const newValue = inputEdit.value.trim()
      if (newValue) {
        text.textContent = newValue
      }
      reset()
    })

    buttonCancell.addEventListener('click', reset)

    text.style.display = "none";
    iconContainer.classList.add("inactive");
    item.appendChild(inputEdit);
    item.appendChild(buttonConfirm);
    item.appendChild(buttonCancell);
  });
  //

  // Icon Delete
  const iconDelete = document.createElement("i");
  iconDelete.className = "bi bi-x-square red";

  iconDelete.addEventListener("click", () => {
    item.parentNode.removeChild(item);
  });
  //

  iconContainer.appendChild(iconFinished);
  iconContainer.appendChild(iconEdit);
  iconContainer.appendChild(iconDelete);

  item.appendChild(text);
  item.appendChild(iconContainer);

  listPending.appendChild(item);
  inputForm.value = "";
});
