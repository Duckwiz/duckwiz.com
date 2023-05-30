// const num = Math.floor(Math.random()*1000)
// document.getElementById("val").textContent = num;

async function getHello() {
  const res = await fetch("/hello");
  return res;
};

document.getElementById("msg").textContent = await getHello();