const num = Math.floor(Math.random()*1000)
document.getElementById("val").textContent = num;

const options = {
  method: "POST",
  body: JSON.stringify(num)
}

fetch("/.netlify/functions/index", options)