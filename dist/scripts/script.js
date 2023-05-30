// const num = Math.floor(Math.random()*1000)
// document.getElementById("val").textContent = num;

const msg = async () => {
  const res = await fetch("/hello");
  return res;
};

document.getElementById("msg").textContent = msg;