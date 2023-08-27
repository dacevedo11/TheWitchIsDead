// roll Twists
const Twists = [
    "the villagers are in on it",
    "a rival witch set her up",
    "the witch-hunter didn't do it",
    "the witch-hunter is waiting for you",
    "the village folk are having a festival",
    "the witch-hunter died and is being buried",
    "there are two (rival) witch-hunters in town",
    "the village is abandoned",
    "the witch-hunter has dragged a suspect up for interrogation",
    "the village hates him"
];

const rollTwist = document.getElementById("rollTwist");
const resultTwist = document.getElementById("resultTwist");

rollTwist.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * 10) + 1;
    const twist = Twists[roll - 1];
    resultTwist.textContent = `${twist}`;
});