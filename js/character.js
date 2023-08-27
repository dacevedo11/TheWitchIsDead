// roll Animal
const animalNames = [
    "Fox (C2, F2, S1, Q1)",
    "Cat (C0, F1, S3, Q2)",
    "Toad (C1, F0, S2, Q1)",
    "Spider (C2, F0, S3, Q1)",
    "Owl (C3, F1, S1, Q2)",
    "Hare (C0, F0, S2, Q3)",
    "Magpie (C2, F1, S1, Q2)",
    "Crow (C2, F1, S2, Q1)",
    "Dog (C1, F3, S0, Q1)",
    "Rat (C1, F0, S2, Q2)"
];

const rollAnimal = document.getElementById("rollAnimal");
const resultAnimal = document.getElementById("resultAnimal");

rollAnimal.addEventListener("click", () => {
    const roll = Math.floor(Math.random() * 10) + 1;
    const animal = animalNames[roll - 1];
    resultAnimal.textContent = `${animal}`;
});