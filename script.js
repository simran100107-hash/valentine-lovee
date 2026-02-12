let slide = 0;

const slides = [
  {
    q: "Will you be my Valentine? 💘",
    o: ["Yes 💖", "No 😢"]
  },
  {
    q: "What moment of us feels most special to you?",
    o: ["Hug and kisses", "Holding hands & talking", "Late night calls & chats", "Ofc everything"]
  },
  {
    q: "What will never change about us?",
    o: ["Our bond", "Our comfort", "Choosing each other", "Our love"]
  },
  {
    q: "A place that would feel like 'us'",
    o: ["Quiet cafes", "Beach & sunset", "Car rides with music", "Sleeping together"]
  },
  {
    q: "One thing we can't resist",
    o: ["Kissing each other", "Making out in wild places", "Irritating each other", "All of the above"]
  },
  {
    q: "Our most distracting habit",
    o: ["Standing too close", "Random touches", "Random kisses", "Staring too long"]
  },
  {
    q: "This is not over yet... I have something different for you. Are you ready?",
    o: ["Yes 💌"]
  },
  {
    q: "I dont believe in valentine and all and confessing my feelings showing love just for a day is not my type... I love you every day and i choose you every single day.. Ik we go through soo many ups and downs but the thing that matter is we still never give up on each other and we'll never.. I feel soo grateful to have you by my side the perfect bf I've dreamed of I really lovee youu soo muchh pradhuman I love how you care for me how you think about me how treat me how gentle you're with me I love everything about you.. I hope we never lose each other and stay together forever I love youu baby...",
    o: ["I love you too 💖"]
  }
];

function loadSlide() {
  document.getElementById("question").innerText = slides[slide].q;
  let optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  slides[slide].o.forEach((opt, i) => {
    let btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => clickOption(i);
    optionsDiv.appendChild(btn);
  });
}

function clickOption(i) {
  if (slide == 0 && i == 1) {
    document.body.innerHTML = "<h1 style='color:white'>💔 Fake Heartbreak... but you still must choose YES 😏</h1>";
    return;
  }

  if (slide == 0 && i == 0) {
    startHearts();
  }

  slide++;
  if (slide < slides.length) loadSlide();
  else alert("I LOVE YOU BABY 💖");
}

function startHearts() {
  setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }, 300);
}

loadSlide();
