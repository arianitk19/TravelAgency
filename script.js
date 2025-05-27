function openModal(imgSrc) {
    document.getElementById("myModal").style.display = "block";
    document.getElementById("modalImage").src = imgSrc;
}

function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

function shfaqDetajet() {
    var detajet = document.getElementById('detajet');
    if (detajet.style.display === "none") {
        detajet.style.display = "block";
    } else {
        detajet.style.display = "none";
    }
}

const images = document.querySelectorAll('.gallery img');
let currentIndex = 0;

