// roll Scenario
const villageScenarios = [
    "Under The Thumb of the Baron",
    "Filled with cherry gnomes",
    "controlled by a creepy cult",
    "devoutly religious",
    "incredibly supersticious",
    "at war with forest tribes",
    "built around a wizard college",
    "full of hardy mining folk",
    "shady and dangerous",
    "oppresively perfect"
];

const rollVillage1 = document.getElementById("rollVillage1");
const resultVillage1 = document.getElementById("resultVillage1");

const rollVillage2 = document.getElementById("rollVillage2");
const resultVillage2 = document.getElementById("resultVillage2");

rollVillage1.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * 10) + 1;
    const village1 = villageScenarios[roll - 1];
    resultVillage1.textContent = `${village1} &`;
});

rollVillage2.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * 10) + 1;
    const village2 = villageScenarios[roll - 1];
    resultVillage2.textContent = `${village2}`;
});