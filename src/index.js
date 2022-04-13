import Color from "color";
import interpolateRGB from " interpolate-rgb";

const OFF = "#ebedf0";
const ON = "#216e39";

const columns = Array.from(document.querySelectorAll(".img > svg > g > g")).map(
  (grp) => Array.from(grp.querySelectorAll("rect"))
);

const img = new Image();
img.src = "/image/bulbasaur.png";

img.onload = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
};

const interpolator = interpolateRGB(Color(OFF).color, Color(ON).color);

//console.log(Color(ON).color);
//console.log(Color(ON).color.hex());

Array.from(columns).forEach((cols, x) => {
  Array.from(cols).forEach((rect, y) => {
    const pixel = ctx.getImageData(cx, y, 1, 1);
    rect.style.fill = Color(interpolator(0.5)).hex();
  });
});
