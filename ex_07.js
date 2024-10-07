
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector('.cart-btn');
    const colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5'];
    let currentColorIndex = 0;

    if (button) {
        button.textContent = 'CHANGE COLOR';

        button.addEventListener('click', function() {
          
            document.body.classList.remove(colors[currentColorIndex]);

            currentColorIndex = (currentColorIndex + 1) % colors.length;
            
            document.body.classList.add(colors[currentColorIndex]);
        });
    }
});
