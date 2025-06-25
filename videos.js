document.addEventListener("DOMContentLoaded", function() {
    const videoData = [
        {
            "category": "💪 Movimento",
            "title": "Alongamento Matinal",
            "description": "Comece seu dia com energia e disposição através de alongamentos suaves que despertam o corpo com acolhimento.",
            "duration": "3 min",
            "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo URL real do seu vídeo
        },
        {
            "category": "🧘 Mindfulness",
            "title": "Meditação para Equilíbrio",
            "description": "Encontre seu centro e cultive a paz interior com esta prática guiada de respiração consciente.",
            "duration": "5 min",
            "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo URL real do seu vídeo
        },
        {
            "category": "🍎 Nutrição",
            "title": "Dicas de Alimentação Saudável",
            "description": "Aprenda a fazer escolhas alimentares inteligentes para uma vida mais saudável e equilibrada.",
            "duration": "7 min",
            "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo URL real do seu vídeo
        },
        {
            "category": "🏋️ Treino",
            "title": "Exercícios Rápidos para o Dia a Dia",
            "description": "Sessões curtas e eficazes para manter seu corpo ativo, mesmo com a rotina agitada.",
            "duration": "10 min",
            "video_url": "https://www.youtube.com/embed/dQw4w9WgXcQ" // Substitua pelo URL real do seu vídeo
        }
    ];

    const videoGrid = document.querySelector(".video-grid-new");

    videoData.forEach(video => {
        const videoCard = document.createElement("div");
        videoCard.classList.add("video-card");

        videoCard.innerHTML = `
            <div class="video-category">${video.category}</div>
            <div class="video-thumbnail"></div>
            <div class="video-details">
                <h4>${video.title}</h4>
                <p>${video.description}</p>
                <button class="assistir-button" data-video-url="${video.video_url}">Assistir Agora</button>
            </div>
        `;
        videoGrid.appendChild(videoCard);
    });

    // Adicionar evento de clique aos botões "Assistir Agora"
    videoGrid.addEventListener("click", function(event) {
        if (event.target.classList.contains("assistir-button")) {
            const videoUrl = event.target.dataset.videoUrl;
            // Aqui você pode abrir o vídeo em um modal, nova aba, etc.
            // Por simplicidade, vamos abrir em uma nova aba por enquanto.
            window.open(videoUrl, "_blank");
        }
    });
});

