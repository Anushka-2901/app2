const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const mainVideo = document.getElementById("main-video");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let stage = 0;

const pages = [
  {
    video: "1.mp4",
    title: "Do you love me? 🥺",
    subtitle: "Kannu is all yours"
  },
  {
    video: "2.mp4",
    title: "Please think again! 😟",
    subtitle: "itni jaldi na matt bolo🥺"
  },
  {
    video: "3.mp4",
    title: "Ek aur baar Soch lo! 😣",
    subtitle: "kyu aisa kar rahi ho Pizzz Man jao🥺"
  },
  {
    video: "4.mp4",
    title: "Baby Man jao na! Kitna bhav khaogi 😭",
    subtitle: "bhut glt baat hai yrr😭"
  },
  {
    video: "5.mp4",
    title: "I knew it! You Love me a lot 😚",
    subtitle: ""
  }
];

// YES button logic
yesBtn.onclick = () => {
  showPage(4);
};

// NO button logic
noBtn.onclick = () => {
  if (stage < 3) {
    stage++;
    showPage(stage);
  }
};

function showPage(index) {
  stage = index;
  mainVideo.src = pages[index].video;
  mainVideo.load(); // refresh video
  mainVideo.play();
  title.innerText = pages[index].title;
  subtitle.innerText = pages[index].subtitle;

  // Reset No button
  noBtn.style.position = "relative";
  noBtn.style.left = "0px";
  noBtn.style.top = "0px";
  noBtn.style.display = "inline-block";
  yesBtn.style.display = "inline-block";
  noBtn.removeEventListener("mouseover", moveNoButtonRandomly);

  if (index === 4) {
    noBtn.style.display = "none";
    yesBtn.style.display = "none";
  }

  // Runaway No button on stage 3
  if (index === 3) {
    noBtn.addEventListener("mouseover", moveNoButtonRandomly);
  }
}

function moveNoButtonRandomly() {
  const container = document.querySelector(".container");
  const maxX = container.offsetWidth - noBtn.offsetWidth;
  const maxY = container.offsetHeight - noBtn.offsetHeight;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${randomX}px`;
  noBtn.style.top = `${randomY}px`;
}

// Initial load
showPage(stage);
