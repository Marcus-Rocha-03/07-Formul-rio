document.querySelector('.informacoes').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir o envio do formulário

    let isValid = true;

    const inputs = document.querySelectorAll('.input');
    inputs.forEach(input => {
        const errorElement = document.createElement('div');
        errorElement.className = 'error-message';
        if (input.nextElementSibling && input.nextElementSibling.classList.contains('error-message')) {
            input.nextElementSibling.remove();
        }

        if (input.value.trim() === "") {
            input.classList.add('bordaR');
            errorElement.textContent = "Campo obrigatório";
            input.parentNode.insertBefore(errorElement, input.nextSibling);
            isValid = false;
        } else {
            input.classList.remove('bordaR');
        }
    });

    if (isValid) {
        alert('Formulário enviado com sucesso!');
    }
});
