// roll Witch-Hunter
const describeHunter = [
    "armoured and tough",
    "wizened and wise",
    "drunk and violent",
    "pious and aggressive",
    "guarded and cowardly",
    "magical and jealous",
    "clever and cruel",
    "duplicitous and hidden",
    "jolly and well-meaning",
    "headstrong and wild"
];

const rollHunter = document.getElementById("rollHunter");
const resultHunter = document.getElementById("resultHunter");

rollHunter.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * 10) + 1;
    const hunter = describeHunter[roll - 1];
    resultHunter.textContent = `${hunter}`;
});