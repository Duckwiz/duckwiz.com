// const num = Math.floor(Math.random()*1000)
// document.getElementById("val").textContent = num;

async function getHello() {
  const res = await fetch("/hello");
  document.getElementById("msg").textContent = res;
};

