// Função para inicializar players de vídeo
function initVideoPlayers() {
    const videoContainers = document.querySelectorAll(".video-container");
    
    videoContainers.forEach(container => {
        const video = container.querySelector("video");
        const playButton = container.querySelector(".play-button");
        
        playButton.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                playButton.style.display = "none";
            }
        });
        
        video.addEventListener("pause", () => {
            playButton.style.display = "flex";
        });
        
        video.addEventListener("ended", () => {
            playButton.style.display = "flex";
        });
    });
}

// Lazy loading para vídeos
function setupLazyLoading() {
    const videos = document.querySelectorAll("video[data-src]");
    
    const videoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const video = entry.target;
                video.src = video.dataset.src;
                video.load();
                videoObserver.unobserve(video);
            }
        });
    });
    
    videos.forEach(video => videoObserver.observe(video));
}

// Chame as funções quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
    initVideoPlayers();
    setupLazyLoading();
});


