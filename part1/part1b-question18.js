var interval = window.setInterval(newTime, 1000);

function newTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}