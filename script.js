function showMessage() {
    alert("Penis ❤️");
}


// Funktion til at åbne video-pop-up
function openVideo() {
    var videoModal = document.getElementById("videoModal");
    var popupVideo = document.getElementById("popupVideo");

    videoModal.style.display = "block"; // Vis modalen
    popupVideo.play(); // Start afspilning af videoen
}

// Funktion til at lukke video-pop-up
function closeVideo() {
    var videoModal = document.getElementById("videoModal");
    var popupVideo = document.getElementById("popupVideo");

    videoModal.style.display = "none"; // Skjul modalen
    popupVideo.pause(); // Stop videoafspilning
    popupVideo.currentTime = 0; // Nulstil videoen
}

// Luk video-pop-up ved klik udenfor video-indholdet
window.onclick = function(event) {
    var videoModal = document.getElementById("videoModal");
    var popupVideo = document.getElementById("popupVideo");

    if (event.target === videoModal) {
        videoModal.style.display = "none";
        popupVideo.pause();
        popupVideo.currentTime = 0;
    }
}
