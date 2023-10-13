let timerInterval;
let totalSeconds = 86400; // 24 heures en secondes (24 * 60 * 60)

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000); // Met à jour le minuteur toutes les 1 seconde
}

function stopTimer() {
    clearInterval(timerInterval); // Arrête le minuteur
}

function resetTimer() {
    clearInterval(timerInterval); // Arrête le minuteur
    totalSeconds = 86400; // Réinitialise le compte à rebours à 24 heures
    updateTimer(); // Met à jour l'affichage du minuteur
}

function updateTimer() {
    if (totalSeconds <= 0) {
        // Le minuteur a atteint 0, arrêtez-le
        clearInterval(timerInterval);
    } else {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        const displayHours = hours < 10 ? `0${hours}` : hours;
        const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;

        const timerDisplay = document.getElementById("timer");
        timerDisplay.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;

        totalSeconds--; // Réduire le nombre de secondes restantes
    }
}