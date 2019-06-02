const canvas = document.getElementById("jsCanvas");

let painting = false;

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x, y);
}

function onmousedown(event) {
  console.log(event);
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onmousedown);
}
