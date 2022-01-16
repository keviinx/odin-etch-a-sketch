const container = document.getElementById("container");

function makeGrids(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (i = 0; i < (rows * cols); i++) {
        let grid = document.createElement("div");
        container.appendChild(grid).className = "grid";
    };
};

makeGrids(16, 16);