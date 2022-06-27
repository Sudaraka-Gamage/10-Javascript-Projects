const notesEL = document.querySelector(".notes");
const editBtn = document.querySelector(".edit");
const deleteBtn = document.querySelector(".delete");

const main = notesEL.querySelector(".main");
const textArea = notesEL.querySelector("textarea");


editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
});

textArea.addEventListener("input", (e) => {
    const { value } = e.target;

    main.innerHTML = marked.parse(' value ');
});