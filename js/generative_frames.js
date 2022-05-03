canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");
canvas.width = 300;
canvas.height = 300;

function line(x, y, width, height) {
  var leftToRight = Math.random() >= sliders[2].value/100;
    if (leftToRight) {
      ctx.moveTo(x, y);
      ctx.lineTo(x + width, y + height);
      ctx.stroke();
    } else {
      ctx.moveTo(x + width, y);
      ctx.lineTo(x, y + height);
      ctx.stroke();
    }

}

function draw_frame(){
  var step = Math.floor(sliders[0].value/sliders[1].value)
  for (var x = 0; x < sliders[0].value; x += step) {
    for (var y = 0; y < sliders[0].value; y += step) {
      line(x, y, step, step);

    }
  }
}


var sliders = document.querySelectorAll("input");



sliders.forEach((slider, i) => {
  slider.labels[0].innerHTML = slider.value;

  slider.onmouseup = function(){
    slider.labels[0].innerHTML = slider.value;
    canvas.width = sliders[0].value;
    canvas.height = sliders[0].value;
    draw_frame();

  }

});
