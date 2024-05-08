let selectedColor = '#000000';
let isDrawing = false;

const table = document.getElementById('draw-board');
table.addEventListener('mousedown', function() {
    isDrawing = true;
});

table.addEventListener('mouseup', function() {
    isDrawing = false;
});

table.addEventListener('mouseleave', function() {
    isDrawing = false;
});

for (let i = 0; i < 30; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 30; j++) {
        const cell = document.createElement('td');
        cell.style.backgroundColor = '#ffffff'; 
        cell.addEventListener('mouseover', function() {
            if (isDrawing) {
                this.style.backgroundColor = selectedColor;
            }
        });
        cell.addEventListener('mousedown', function() {
            this.style.backgroundColor = selectedColor;
        });
        row.appendChild(cell);
    }
    table.appendChild(row);
}

const colorButtons = document.querySelectorAll('.color-button');
colorButtons.forEach(function(button) {
    button.style.backgroundColor = button.dataset.color;
    button.addEventListener('click', function() {
        selectedColor = this.dataset.color;
        colorButtons.forEach(function(btn) {
            btn.classList.remove('selected');
        });
        this.classList.add('selected');
    });
});

const customColorInput = document.getElementById('custom-color');
customColorInput.addEventListener('input', function() {
    selectedColor = this.value;
});

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() {
    const cells = document.querySelectorAll('#draw-board td');
    cells.forEach(function(cell) {
        cell.style.backgroundColor = '#ffffff'; // Change this to your default color
    });
});

const darkModeToggle = document.getElementById('dark-mode-toggle');
const footer = document.getElementById('footer');
let isDarkMode = false;

darkModeToggle.addEventListener('click', function() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        footer.style.backgroundColor = '#333';
    } else {
        document.body.style.backgroundColor = '#ffe2b0';
        document.body.style.color = '#000';
        footer.style.backgroundColor = '#ffe2b0';
    }
});