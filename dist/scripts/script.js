async function getHello() {
  const res = await fetch("/api/hello");
  console.log(res);
  document.getElementById("msg").textContent = res;
};

getHello();