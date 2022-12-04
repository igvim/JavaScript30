/*
get DOM element
add event listener for keydown event which adds playing class
- bind to a key using event data from keydown event
add event listener for keyup which removes playing
*/

window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key=${e.key}]`);
    const key = document.querySelector(`div[data-key=${e.key}]`);
    if (!audio || !key) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
});

window.addEventListener("keyup", (e) => {
    const key = document.querySelector(`div[data-key=${e.key}]`);
    if (!key) return;
    key.classList.remove("playing");
});