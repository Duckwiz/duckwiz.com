// const num = Math.floor(Math.random()*1000)
// document.getElementById("val").textContent = num;

const msg = await fetch("/hello");
document.getElementById("msg").textContent = msg;