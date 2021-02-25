const $filamentL = document.getElementById("filamentL");
const $filamentR = document.getElementById("filamentR");
const $reelL = document.getElementById("reelL");
const $reelR = document.getElementById("reelR");

const $btnPlayerUndo = document.getElementById("btn-player-undo");
const $btnPlayerBackward = document.getElementById("btn-player-backward");
const $btnPlayerPlay = document.getElementById("btn-player-play");
const $btnPlayerPause = document.getElementById("btn-player-pause");
const $btnPlayerForward = document.getElementById("btn-player-forward");
const $btnPlayerStop = document.getElementById("btn-player-stop");

// --------------------------- a n i m a t i o n ---------------------------
const animationReelL = $reelL.animate(
  [
    {
      transform: "rotate(360deg)",
    },
    {
      transform: "rotate(0deg)",
    },
    {
      transform: "rotate(360deg)",
    },
  ],
  {
    duration: 9000,
    direction: "normal",
    easing: "linear",
    iterations: Infinity,
  }
);

const animationReelR = $reelR.animate(
  [
    {
      transform: "rotate(360deg)",
    },
    {
      transform: "rotate(0deg)",
    },
    {
      transform: "rotate(360deg)",
    },
  ],
  {
    duration: 9000,
    direction: "normal",
    easing: "linear",
    iterations: Infinity,
  }
);

const animationFilamentL = $filamentL.animate(
  [
    {
      transform: "scale(.6)",
    },
    {
      transform: "scale(1)",
    },
    {
      transform: "scale(.6)",
    },
  ],
  {
    duration: 9000,
    direction: "normal",
    easing: "linear",
    iterations: Infinity,
  }
);

const animationFilamentR = $filamentR.animate(
  [
    {
      transform: "scale(1)",
    },
    {
      transform: "scale(.6)",
    },
    {
      transform: "scale(1)",
    },
  ],
  {
    duration: 9000,
    direction: "normal",
    easing: "linear",
    iterations: Infinity,
  }
);

// --------------------------- a n i m a t i o n      s t a t u s ---------------------------
animationReelL.cancel();
animationReelR.cancel();
animationFilamentL.cancel();
animationFilamentR.cancel();

// --------------------------- a n i m a t i o n      a c t i o n s ---------------------------

// ----- p l a y
$btnPlayerPlay.addEventListener("click", (event) => {
  animationReelL.play();
  animationReelR.play();
  animationFilamentL.play();
  animationFilamentR.play();

  if (
    animationReelL.playState === "running" &&
    animationReelR.playState === "running" &&
    animationFilamentL.playState === "running" &&
    animationFilamentR.playState === "running"
  ) {
    $btnPlayerPlay.classList.add("visible");
    $btnPlayerPause.classList.remove("visible");
  } else {
    $btnPlayerPlay.classList.remove("visible");
    $btnPlayerPause.classList.add("visible");
  }
});

// ----- p a u s e
$btnPlayerPause.addEventListener("click", (event) => {
  animationReelL.pause();
  animationReelR.pause();
  animationFilamentL.pause();
  animationFilamentR.pause();

  if (
    animationReelL.playState === "paused" &&
    animationReelR.playState === "paused" &&
    animationFilamentL.playState === "paused" &&
    animationFilamentR.playState === "paused"
  ) {
    $btnPlayerPlay.classList.remove("visible");
    $btnPlayerPause.classList.add("visible");
  } else {
    $btnPlayerPlay.classList.add("visible");
    $btnPlayerPause.classList.remove("visible");
  }
});

// ----- s t o p
$btnPlayerStop.addEventListener("click", (event) => {
  animationReelL.cancel();
  animationReelR.cancel();
  animationFilamentL.cancel();
  animationFilamentR.cancel();

  if (
    animationReelL.playState === "idle" &&
    animationReelR.playState === "idle" &&
    animationFilamentL.playState === "idle" &&
    animationFilamentR.playState === "idle"
  ) {
    $btnPlayerPlay.classList.remove("visible");
    $btnPlayerPause.classList.add("visible");
  } else {
    $btnPlayerPlay.classList.add("visible");
    $btnPlayerPause.classList.remove("visible");
  }
});

// ----- u n d o
$btnPlayerUndo.addEventListener("click", (event) => {
  animationReelL.reverse();
  animationReelR.reverse();
  animationFilamentL.reverse();
  animationFilamentR.reverse();
});

// ----- f o r w a r d
$btnPlayerForward.addEventListener("click", (event) => {
  animationReelL.playbackRate += 0.1;
  animationReelR.playbackRate += 0.1;
  animationFilamentL.playbackRate += 0.1;
  animationFilamentR.playbackRate += 0.1;
});

// ----- b a c k w a r d
$btnPlayerBackward.addEventListener("click", (event) => {
  animationReelL.playbackRate -= 0.1;
  animationReelR.playbackRate -= 0.1;
  animationFilamentL.playbackRate -= 0.1;
  animationFilamentR.playbackRate -= 0.1;
});
