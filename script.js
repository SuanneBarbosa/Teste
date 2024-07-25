function updateAgeOutput(value) {
    document.getElementById('age-output').value = value;
}

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});
