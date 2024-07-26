function updateAgeOutput(value) {
    let ageRange = "";

    if (value >= 0 && value < 20) {
        ageRange = "0 - 20 anos";
    } else if (value >= 20 && value < 40) {
        ageRange = "20 - 40 anos";
    } else if (value >= 40 && value < 60) {
        ageRange = "40 - 60 anos";
    } else if (value >= 60 && value < 80) {
        ageRange = "60 - 80 anos";
    } else if (value >= 80 && value <= 100) {
        ageRange = "80 - 100 anos";
    }

    document.getElementById('age-range-output').innerText = `Faixa de idade: ${ageRange}`;
}

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const contact = document.getElementById('contact').value;
    const ageRange = document.getElementById('age-range').value;
    const interests = Array.from(document.querySelectorAll('input[name="interest"]:checked')).map(el => el.nextSibling.textContent.trim()).join(', ');
    const comments = document.getElementById('comments').value;

    document.getElementById('modal-name').innerText = name;
    document.getElementById('modal-contact').innerText = contact;
    document.getElementById('modal-age-range').innerText = document.getElementById('age-range-output').innerText;
    document.getElementById('modal-interests').innerText = interests || 'Nenhum';
    document.getElementById('modal-comments').innerText = comments;

    const modal = document.getElementById('confirmationModal');
    modal.style.display = "block";

    const closeModal = document.getElementsByClassName('close')[0];
    const okButton = document.getElementById('modal-ok-button');
    
    closeModal.onclick = function() {
        modal.style.display = "none";
        window.location.reload();
    }

    okButton.onclick = function() {
        modal.style.display = "none";
        window.location.reload();
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
            window.location.reload();
        }
    }
});

function resetSlider() {
    const ageRangeInput = document.getElementById('age-range');
    ageRangeInput.value = 0;
}

window.addEventListener('load', resetSlider);
