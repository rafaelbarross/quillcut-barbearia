// // Adicionando funcionalidade ao botão de reprodução e pausa do vídeo
function togglePlayPause(videoId) {
    const video = document.getElementById(videoId);
    const playButton = document.getElementById("play-button" + videoId.charAt(videoId.length - 1));
    if (video.paused) {
      video.play();
      playButton.innerHTML = "| |";
      setTimeout(function() {
        playButton.style.opacity = "0";
      }, 2000);
    } else {
      video.pause();
      playButton.innerHTML = "▶";
      playButton.style.opacity = "1";
    }
  }
  
  // Adicione um ouvinte de evento 'ended' a cada vídeo
  ["custom-video__video1", "custom-video__video2", "custom-video__video3"].forEach(function(videoId) {
    const video = document.getElementById(videoId);
    video.addEventListener('ended', function() {
      this.currentTime = 0;
      const playButton = document.getElementById("play-button" + videoId.charAt(videoId.length - 1));
      playButton.innerHTML = "▶";
      playButton.style.opacity = "1";
    });
  });