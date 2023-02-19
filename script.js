const displayClock = document.getElementById("displayclock");
const startBtn = document.getElementById("startbtn");
const stopBtn = document.getElementById("stopbtn");
const resetBtn = document.getElementById("resetbtn");
const toggles = document.querySelectorAll("toggle");
const watchFace = document.querySelector(".stopwatch");
let timer = null;
const clearTimer = () => {
  clearInterval(timer);
};

let [seconds, minutes, hours] = [0, 0, 0];

function stopWatch() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
    if (minutes == 60) {
      minutes = 0;
      hours++;
      if (hours == 99) hours == 0;
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayClock.innerHTML = `${h}:${m}:${s}`;
}

// add active classes

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.classList.remove("active");
  });
});

function watchStart() {
  if (timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(stopWatch, 1000);
}

startBtn.addEventListener("click", () => {
  watchStart();
  displayClock.style.color = "white";
  displayClock.style.fontSize = "3rem";
  displayClock.style.zIndex = "1";
  displayClock.style.opacity = "100%";
});

stopBtn.addEventListener("click", () => {
  clearTimer();
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  [seconds, minutes, hours] = [0, 0, 0];
  displayClock.innerHTML = "00:00:00";
  displayClock.style.color = "";
  displayClock.style.fontSize = "";
});
