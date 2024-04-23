const names = [];

function allFunc(){
  function addAndRemoveNames() {
    const form = document.querySelector(".form");
    const namesList = document.querySelector(".namesList");
    const nameInput = document.querySelector(".form input[type='text']");
    const totalPlayersInBox =  document.querySelector(".totalPlayersInBox span");
    const removeIconAndNumber =  document.querySelector(".numberRemoveBtn")
    
  
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      let newNameInput = nameInput.value.trim();
      const newLiElement = document.createElement("li");
      // newNameInput = newNameInput.trim();
      if (newNameInput) {
        let innerHTMLContent = `<li
      class="border-b-2 pl-4 rounded-2xl w-36  bg-slate-950 flex justify-around m-2 text-lg hover:-skew-y-3
  
      "
    >
      <span class="text-center ">${newNameInput}</span>
      <div>
        <button type="button" class="numberRemoveBtn">
          <i class="ri-close-circle-fill ri-lg remove"></i>
        </button> 
      </div>
    </li>`;
        newLiElement.innerHTML = innerHTMLContent;
        names.push(newNameInput);
  
        namesList.append(newLiElement);
        nameInput.value = "";
      } else {
        alert("Please Add Names");
      }
      const nameLength =  ""+names.length;
      totalPlayersInBox.textContent = nameLength;
    });
  
    namesList.addEventListener("click", function (e) {
    const totalPlayersInBox =  document.querySelector(".totalPlayersInBox span");
  
      if (e.target.classList.contains("remove")) {
        const targetLi = e.target.parentNode.parentNode.parentNode;
        const nameLength =  ""+names.length;
        totalPlayersInBox.textContent = nameLength;
    
        targetLi.remove(); 
      }
   
      if (e.target.classList.contains("remove")) {
        const content = e.target.parentNode.parentNode.parentNode.children[0].textContent;
        for (let i = 0; i < names.length; i++) {
          if (content === names[i]) {
            names.splice(i, 1);
          }
        }
      }
    });
  
  
  }
  addAndRemoveNames();
  function clearNameBox() {
    const formBox = document.querySelector(".checkBox input[type='checkbox']");
    const form = document.querySelector(".form");
    const playersNameBox = document.querySelector(".playersNameBox");
    const orHide = document.querySelector(".orHide");
    const totalPlayers = document.querySelector(".totalPlayers");
  
    formBox.addEventListener("click", function (e) {
      if (formBox.checked == true) {
        form.classList.add("hidden");
        playersNameBox.classList.add("hidden");
        orHide.classList.add("hidden");
        totalPlayers.classList.remove("hidden");
        
      } else if (!formBox.checked) {
        form.classList.remove("hidden");
        playersNameBox.classList.remove("hidden");
        orHide.classList.remove("hidden");
        totalPlayers.classList.add("hidden");
        
      }else{
        
      }
    });
  }
  clearNameBox();
  function hidingAdvanceSettings() {
    const advanceHeading = document.querySelector(".advanceHeading");
    const headIcon = document.querySelector(".advanceHeading span i");
    const headSpan = document.querySelector(".advanceHeading span");
    const advancedSettingsDiv = document.querySelector("#advancedSettings");
  
    advanceHeading.addEventListener("click", function (e) {
      if (true) {
        advancedSettingsDiv.classList.toggle("hidden");
        if (headIcon.classList.contains("ri-arrow-right-circle-fill")) {
          headIcon.classList.replace(
            "ri-arrow-right-circle-fill",
            "ri-arrow-down-circle-fill"
          );
        } else {
          headIcon.classList.replace(
            "ri-arrow-down-circle-fill",
            "ri-arrow-right-circle-fill"
          );
        }
      }
    });
  }
  hidingAdvanceSettings();  
}
allFunc()

// const totalTeams = document.querySelector("#totalTeamsNumberInput").addEventListener("change",function(e){
//   e.preventDefault();
//   totalTeams =  totalTeamsNumberInput.value;
//   return totalTeams;
// });
