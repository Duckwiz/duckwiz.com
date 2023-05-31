async function getHello() {
  const res = await fetch("/hello");
  const data = await res.json();
  console.log(data);
  document.getElementById("msg").textContent = data;
};

getHello();