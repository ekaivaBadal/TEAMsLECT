const names = [];
const newPlayers = [];

function gettingDetails(callback) {
  const totalTeams = document.querySelector("#totalTeamsNumberInput");

  totalTeams.addEventListener("change", function (e) {
    e.preventDefault();
    const totalTeamsInput = totalTeams.value;
    callback(totalTeamsInput); // Call the callback function with the input value
  });
}
function handleTotalTeamsInput(value) {
  console.log(value);
}
gettingDetails(handleTotalTeamsInput);

function addAndRemoveNames() {
  const form = document.querySelector(".form");
  const namesList = document.querySelector(".namesList");
  const nameInput = document.querySelector(".form input[type='text']");
  const totalPlayersInBox = document.querySelector(".totalPlayersInBox span");
  const removeIconAndNumber = document.querySelector(".numberRemoveBtn");

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

      namesList.append(newLiElement);
      names.push(newNameInput);
      console.log(names);
      nameInput.value = "";
    } else {
      alert("Please Add Names");
    }
    const nameLength = "" + names.length;
    totalPlayersInBox.textContent = nameLength;
  });

  namesList.addEventListener("click", function (e) {
    const totalPlayersInBox = document.querySelector(".totalPlayersInBox span");

    if (e.target.classList.contains("remove")) {
      const targetLi = e.target.parentNode.parentNode.parentNode;
      const nameLength = "" + names.length;
      totalPlayersInBox.textContent = nameLength;

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
    } else {
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

function getYourTeams() {
  const btn = document.querySelector("#getTheTeams button[type='submit']");

  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (names.length === 0 || names.length < 2) {
      alert("Please add more Than one name");
    }else {
      if (typeof number === 'number' && !Number.isInteger(number)) {
        const totalPlayers = names.length;
        names.sort(() => Math.random() - 0.5);
        let divide = names.length / 2;
        let team1 = names.splice(1, divide);
        Array.of(team1)
        let commonPlayer = names.pop();
        let team2 = names;
        console.log(team1);
        console.log(team2);
        console.log(commonPlayer);   
    
      }else{
        const totalPlayers = names.length;
        names.sort(() => Math.random() - 0.5);
        let divide = names.length / 2;
        let team1 = names.splice(1, divide);
        let team2 = names;
        console.log(`team1 = ${team1}`);
        console.log(`team2 = ${team2}`);
      }
    }
  });
}
getYourTeams();
   