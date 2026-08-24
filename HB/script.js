// Находим окно с фотографиями
const photoModal = document.getElementById("photoModal");


// Находим окно с пожеланиями
const wishesModal = document.getElementById("wishesModal");


// =========================
// ОТКРЫТЬ ФОТОГРАФИИ
// =========================

function openPhotos() {

    photoModal.style.display = "flex";

}


// =========================
// ЗАКРЫТЬ ФОТОГРАФИИ
// =========================

function closePhotos() {

    photoModal.style.display = "none";

}


// =========================
// ОТКРЫТЬ ПОЖЕЛАНИЯ
// =========================

function openWishes() {

    wishesModal.style.display = "flex";

}


// =========================
// ЗАКРЫТЬ ПОЖЕЛАНИЯ
// =========================

function closeWishes() {

    wishesModal.style.display = "none";

}


// Закрытие окна при клике на тёмный фон

window.onclick = function(event) {

    if (event.target === photoModal) {
        photoModal.style.display = "none";
    }

    if (event.target === wishesModal) {
        wishesModal.style.display = "none";
    }

};