// roll Magic
const magicSpells = [
    "Unseen Hand",
    "Conjure Light",
    "Speak Human",
    "Lock/Unlock, Open/Close",
    "Conjure Dinner",
    "Make Flame",
    "Tidy, Clean, and Mend",
    "Plant Growth",
    "Distract/Confuse",
    "Make Book Read Itself Aloud"
];

const rollMagic = document.getElementById("rollMagic");
const resultMagic = document.getElementById("resultMagic");

rollMagic.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * 10) + 1;
    const spell = magicSpells[roll - 1];
    resultMagic.textContent = `${spell}`;
});