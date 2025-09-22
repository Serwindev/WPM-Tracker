const button = document.querySelector("button");
const inputVal = document.querySelector("textarea");
let wpm = document.getElementById("wpm");
let accuracy = document.getElementById("accuracy");
let sentence = document.getElementById("test-word");
let restart = document.getElementById("restart");
const textarea = document.getElementById("text-input");

let time1 = 0;

const sentenceList = [
    "I code like I know what I'm doing, but we all know that's a lie.",
    "If debugging is the process of removing bugs, then programming must be the process of putting them in.",
    "My code works because I threatened it with print statements.",
    "Running late is my cardio, thank you very much.",
    "I speak fluent sarcasm and broken Python.",
    "The only thing I test thoroughly is my patience.",
    "Why fix it now when you can panic about it later?",
    "I tried to be normal once — worst two minutes of my life.",
    "This sentence has no purpose other than wasting your time beautifully.",
    "Coffee: because adulting is hard and sleep is for the weak.",
    "Ctrl+C and Ctrl+V — the true pillars of modern development.",
    "My typing skills are 90% guesswork and 10% autocorrect betrayal.",
    "I put “pro” in procrastinate.",
    "If life had unit tests, I’d fail every assert."
];
const random = Math.floor(Math.random() * sentenceList.length);
sentence.textContent = sentenceList[random];

textarea.addEventListener("input", () => {
  textarea.style.height = "auto"; // Reset height
  textarea.style.height = textarea.scrollHeight + "px"; // Set to content height
});

inputVal.addEventListener("focus", function () {
    time1 = new Date();
});

restart.addEventListener("click", function () {
    window.location.reload();
});

button.onclick = function () {
    const time2 = new Date();
    let timeTaken = time2 - time1;

    let len = sentenceList[random].length;
    let wpmCount = (len/5)/(timeTaken / 60000);
    wpm.textContent = Math.round(wpmCount);


    let error = 0

    if (len == inputVal.value.length) {
        for (let i = 0; i<len; i++) {
            if (inputVal.value[i] != sentenceList[random][i]) {
                error += 1;
            }
        }
    }

    let acc = (len - error)/len;
    accuracy.textContent = Math.round(acc*100);
}