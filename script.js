const music = document.getElementById("music");
  document.addEventListener("click",function() {
    music.play();
  },{once:true});

  const stars = document.getElementById("stars");
  for (let i= 0;i<100;i++){
    const star = document.createElement("div");
    star.className = "stars";
    star.style.left = Math.random() * 100 + "%";
    star.style.top = Math.random() * 100 + "%";
    star.style.animationDelay = Math.random() * 5 + "s";
    stars.appendChild(star);
  }