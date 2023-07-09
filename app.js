function generate() {
  const container = document.getElementById("result");
  const total = document.getElementsByTagName("input")[0].value;
  const dices = document.getElementById("dice-type").value;
  container.innerHTML = "";

  if (dices != 0 && total > 0) {
    
    for (let i = 0; i < total; i++) {
      const box = document.createElement("button");
      box.classList.add("btn");
      box.innerText = Math.floor(Math.random() * dices);
      container.append(box);
    }
  }
}
