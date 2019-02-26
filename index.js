function draw() {
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  context.beginPath();
  context.rect(0, 0, 1500, 1000);
  context.fillStyle = "white";
  context.fill();
  branch(context, 600, 655, -90, 15);
}


function branch(context, x1, y1, angle, depth) {
  var branchArmLength = random(0, 7);
  var leafColorArray = ["#2d3a00", "#475909", "#7ca004"];
  var randomLeafColor =
    leafColorArray[random(0, leafColorArray.length - 1)];
  if (depth != 0) {
    var x2 =
      x1 + Math.cos(angle * (Math.PI / 180.0)) * depth * branchArmLength;
    var y2 =
      y1 + Math.sin(angle * (Math.PI / 180.0)) * depth * branchArmLength;

    line(context, x1, y1, x2, y2, depth);

    if (depth > 1) {
      branch(context, x2, y2, angle - random(15, 20), depth - 1);
      branch(context, x2, y2, angle + random(15, 20), depth - 1);
    } else {
      branch(context, x2, y2, angle, depth - 1);
    }
  } else {
    var x2 =
      x1 + Math.cos(angle * (Math.PI / 180.0)) * depth * branchArmLength;
    var y2 =
      y1 + Math.sin(angle * (Math.PI / 180.0)) * depth * branchArmLength;
    context.fillStyle = randomLeafColor;
    context.beginPath();
    const angleradians = angle * (Math.PI / 180);
    const r = random(3, 5);
    context.ellipse(
      x2,
      y2,
      r,
      2 * r,
      angleradians + Math.PI / 2,
      0,
      Math.PI * 2
    );
    context.fill();
  }
}

function line(context, x1, y1, x2, y2, thickness) {
  context.strokeStyle = "#2b1010";
  context.lineWidth = thickness * 0.7;
  context.beginPath();
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.closePath();
  context.stroke();
}

function random(min, max) {
  return min + Math.floor(Math.random() * (max + 1 - min));
}
