const menuItems = document.querySelectorAll(".side-menu-item");
const targets = document.querySelectorAll(".content-title");

const options = {
  root: null,
  rootMain: "0px",
  threshold: 1,
};

const activeMenu = (target) => {
  menuItems.forEach((item) => {
    const data = item.getAttribute("data-target");
    if (data === target) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeMenu(entry.target.id);
    }
  });
};

$(document).ready(function () {
  // 헤더 로드
  $("#header").load("../nav.html", function () {
    document.getElementById("header").classList.add("fixed");
  });
  // 최상위 이동
  $("#btn_top, #side_btn_top, #btn_top_circle").on("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  $(".side-menu-item").on("click", function () {
    const data = this.getAttribute("data-target");
    document.getElementById(data).scrollIntoView({
      behavior: "smooth",
    });
  });
});

const io = new IntersectionObserver(observerCallback, options);
targets.forEach((target) => {
  io.observe(target);
});

// 파티클 애니메이션 시작

// Little Canvas things
var canvas = document.querySelector("#canvas"),
  ctx = canvas.getContext("2d");

// Set Canvas to be window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Configuration, Play with these
var config = {
  particleNumber: 800,
  maxParticleSize: 10,
  maxSpeed: 40,
  colorVariation: 50,
};

// Colors
var colorPalette = {
  bg: { r: 255, g: 245, b: 239, a: 0 },
  matter: [
    { r: 248, g: 228, b: 191 }, // darkPRPL
    { r: 246, g: 219, b: 202 }, // rockDust
    { r: 255, g: 255, b: 255 }, // solorFlare
    { r: 253, g: 238, b: 152 }, // totesASun
  ],
};

// Some Variables hanging out
var particles = [],
  centerX = canvas.width / 2,
  centerY = canvas.height / 2,
  drawBg,
  // Draws the background for the canvas, because space
  drawBg = function (ctx, color) {
    ctx.fillStyle = "rgba(255, 245, 239,1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  };

// Particle Constructor
var Particle = function (x, y) {
  // X Coordinate
  this.x = x || Math.round(Math.random() * canvas.width);
  // Y Coordinate
  this.y = y || Math.round(Math.random() * canvas.height);
  // Radius of the space dust
  this.r = Math.ceil(Math.random() * config.maxParticleSize);
  // Color of the rock, given some randomness
  this.c = colorVariation(
    colorPalette.matter[Math.floor(Math.random() * colorPalette.matter.length)],
    true
  );
  // Speed of which the rock travels
  this.s = Math.pow(Math.ceil(Math.random() * config.maxSpeed), 0.7);
  // Direction the Rock flies
  this.d = Math.round(Math.random() * 360);
};

// Provides some nice color variation
// Accepts an rgba object
// returns a modified rgba object or a rgba string if true is passed in for argument 2
var colorVariation = function (color, returnString) {
  var r, g, b, a, variation;
  r = Math.round(
    Math.random() * config.colorVariation - config.colorVariation / 2 + color.r
  );
  g = Math.round(
    Math.random() * config.colorVariation - config.colorVariation / 2 + color.g
  );
  b = Math.round(
    Math.random() * config.colorVariation - config.colorVariation / 2 + color.b
  );
  a = Math.random() + 0.5;
  if (returnString) {
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  } else {
    return { r, g, b, a };
  }
};

// Used to find the rocks next point in space, accounting for speed and direction
var updateParticleModel = function (p) {
  var a = 180 - (p.d + 90); // find the 3rd angle
  p.d > 0 && p.d < 180
    ? (p.x += (p.s * Math.sin(p.d)) / Math.sin(p.s))
    : (p.x -= (p.s * Math.sin(p.d)) / Math.sin(p.s));
  p.d > 90 && p.d < 270
    ? (p.y += (p.s * Math.sin(a)) / Math.sin(p.s))
    : (p.y -= (p.s * Math.sin(a)) / Math.sin(p.s));
  return p;
};

// Just the function that physically draws the particles
// Physically? sure why not, physically.
var drawParticle = function (x, y, r, c) {
  ctx.beginPath();
  ctx.fillStyle = c;
  ctx.arc(x, y, r, 0, 2 * Math.PI, false);
  ctx.fill();
  ctx.closePath();
};

// Remove particles that aren't on the canvas
var cleanUpArray = function () {
  particles = particles.filter((p) => {
    return p.x > -100 && p.y > -100;
  });
};

var initParticles = function (numParticles, x, y) {
  for (let i = 0; i < numParticles; i++) {
    particles.push(new Particle(x, y));
  }
  particles.forEach((p) => {
    drawParticle(p.x, p.y, p.r, p.c);
  });
};

// That thing
window.requestAnimFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();

// Our Frame function
var frame = function () {
  // Draw background first
  drawBg(ctx, colorPalette.bg);
  // Update Particle models to new position
  particles.map((p) => {
    return updateParticleModel(p);
  });
  // Draw em'
  particles.forEach((p) => {
    drawParticle(p.x, p.y, p.r, p.c);
  });
  // Play the same song? Ok!
  window.requestAnimFrame(frame);
};

// Click listener
document.body.addEventListener("click", function (event) {
  if (event.target.tagName !== "A") {
    var x = event.clientX,
      y = event.clientY;
    cleanUpArray();
    initParticles(config.particleNumber, x, y);
  }
});

// First Frame
frame();

// First particle explosion
initParticles(config.particleNumber);

// 파티클 애니메이션 끝
