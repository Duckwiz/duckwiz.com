async function getHello() {
  const res = await fetch("/hello");
  console.log(res.body);
  document.getElementById("msg").textContent = res.body;
};

getHello();