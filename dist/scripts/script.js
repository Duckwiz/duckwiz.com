// const num = Math.floor(Math.random()*1000)
// document.getElementById("val").textContent = num;

async function getHello() {
  const res = await fetch("duckwiz.com/api/hello");
  console.log(res.json);
  document.getElementById("msg").textContent = res;
};

getHello();