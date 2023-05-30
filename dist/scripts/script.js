// const num = Math.floor(Math.random()*1000)
// document.getElementById("val").textContent = num;

fetch('/api/hello')
  .then(response => response.text())
  .then(data => {
    console.log('Data from /hello route:', data);
  })
  .catch(error => {
    console.error('Error fetching /hello route:', error);
  });