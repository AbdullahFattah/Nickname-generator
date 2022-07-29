const resultDiv = document.querySelector(".result");
const button = document.querySelector(".button");

name1 = ["Monster", "Demon", "Ghost", "Road"];
name2 = ["Killer", "Rider", "Slayer", "Hunter", "Shooter"];

button.addEventListener("click", () => {
  var result1 = name1[Math.floor(Math.random() * name1.length)];
  var result2 = name2[Math.floor(Math.random() * name2.length)];
  resultDiv.innerHTML = result1 + " " + result2;
});
