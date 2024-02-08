const container = document.createElement("div");
container.classList.add("container");

const obj = {}

for (let i = 0; i < 4; i++) {
    const gridColumn = document.createElement("div");
    gridColumn.classList.add("calculator-column");
    for (let j = 0; j < 5; j++) {
        const gridBox = document.createElement("div");
        gridBox.classList.add("calculator-button");
        obj[`${i}, ${j}`] = gridBox;
        gridColumn.appendChild(gridBox);
    }
    container.appendChild(gridColumn);
}

let num = 9;
for (let i = 1; i < 4; i++) {
    for (let j = 2; j >= 0; j--) {
        const gridBox = obj[`${j}, ${i}`];
        gridBox.textContent = num;
        gridBox.style.backgroundColor = "gray";
        gridBox.addEventListener("click", () => changeDisplay(gridBox.textContent));
        num--;
    }
}

function changeDisplay(value) {
    const display = obj["0, 0"];
    display.textContent += value;
}

document.body.appendChild(container);