// const num = Math.floor(Math.random()*1000)
// document.getElementById("val").textContent = num;

const num = fetch("/hello");
document.getElementById("val").textContent = num;