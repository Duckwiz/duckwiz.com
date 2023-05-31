async function getHello() {
  const res = await fetch("/hello");
  console.log(res);
  document.getElementById("msg").textContent = res;
};

getHello();