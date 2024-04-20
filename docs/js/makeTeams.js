function addAndRemoveNames() {
const form = document.querySelector(".form");
const namesList = document.querySelector(".namesList");
const nameInput = document.querySelector(".form input[type='text']");
const names = [];


form.addEventListener("submit", function (e) {
  e.preventDefault();
  let newNameInput = nameInput.value.trim();
  const newLiElement = document.createElement("li");
  // newNameInput = newNameInput.trim();
  if (newNameInput) {
    
    let innerHTMLContent = `<li
    class="border-b-2 pl-4 rounded-2xl w-36  bg-slate-950 flex justify-around m-2 text-xl hover:-skew-y-3

    "
  >
    <span class="text-center ">${newNameInput}</span>
    <div>
      <button type="button">
        <i class="ri-close-circle-fill ri-lg remove"></i>
      </button> 
    </div>
  </li>`;
    newLiElement.innerHTML = innerHTMLContent;
    names.push(newNameInput);
  
    namesList.append(newLiElement);
    nameInput.value = "";
  } else {
    alert("Please Add Names")
  }
});

namesList.addEventListener("click", function (e) {
  if (e.target.classList.contains("remove")) {
    const targetLi = e.target.parentNode.parentNode.parentNode;
    targetLi.remove();
  }

  if (e.target.classList.contains("remove")) {
    const content =
      e.target.parentNode.parentNode.parentNode.children[0].textContent;
    for (let i = 0; i < names.length; i++) {
      if (content === names[i]) {
        names.splice(i, 1);
      }
    }
  }
});
}
addAndRemoveNames();


function clearNameBox(){
const formBox =  document.querySelector(".form input[type='checkbox']");
console.log(formBox);

}
clearNameBox() 