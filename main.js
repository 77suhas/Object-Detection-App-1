img = "";
function preload() {
  img = loadImage("dog_cat.jpg")
}
function setup() {
  canvas = createCanvas(600, 500)
  canvas.center()
}
function draw() {
  image(img, 0, 0, 600, 500)
  fill("#FF0000")
  text("dog", 100, 100)
  textSize(25)
  noFill()
  stroke("#FF0000")
  strokeWeight(2)
  rect(80, 80, 370, 400)
}