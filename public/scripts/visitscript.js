async function getHello() {
  const res = await fetch("/hello");
  const data = await res.json();
  console.log(data.msg);
  document.getElementById("msg").textContent = data.msg;
};

getHello();