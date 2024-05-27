// by SamuelYAN
// more works //
   // https://twitter.com/SamuelAnn0924
   // https://www.instagram.com/samuel_yan_1990/

let particles = [];
let colors = [];
var imgs = [];
var imgNames = ["https://raw.githubusercontent.com/camifatechab/camilafatechab.github.io/master/taylor.jpg"];
var imgIndex = -1;
let parNum = 1000; // パーティクルの総数
let mySize;
let canvasImg;
let pause = false;
let music_loop = false;
let mode = 2;
let showtext = false;
let message = "Press 's' to pause & 'c' to continue!";
let music_on = false;
let record_time;
let stay_time = 4000;

let seed = Math.random() * 9999;
let t;
let num, vNum;
let radius;
let sizes = [];
let sound;


var loadPercentage = 0.005; // 0 to 1.0
var closeEnoughTarget = 100;

var allParticles = [];

// var mouseSizeSlider;
// var particleSizeSlider;
// var speedSlider;
// var resSlider;
var nextImageButton;

let color_vision, color_bg;

function setup() {
    background(0);
    mySize = min(windowWidth, windowHeight);
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvasContainer');
    if (mode == 1){
        colorMode(HSB, 360, 100, 100, 100);
        colors[0] = color(random(130) + 15, 90, 90, random(25, 50));
        colors[1] = color(random(130) + 175, 90, 90, random(25, 50));
        for (let i = 0; i < parNum; i++) {
            particles.push(new Particle(random(width), random(height)));
        } // 全部のパーティクルを作る
        background(0, 0, 5, 100);
        textAlign(CENTER, CENTER);
        textSize(32);
        canvasImg = createImage(windowWidth, windowHeight);
    }
    else if (mode == 2){
        randomSeed(seed);
        color_vision = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
        setcolor_tile();
        color_bg = random(random([colors0]));
        makeFilter();
        makeFilter2();
        background(0);
        num = 100;
        radius = mySize * 0.5;
        for (let a = 0; a < TAU; a += TAU / num) {
            sizes.push(random(0.1, 1))
        }

        t = 0;
        canvasImg = createImage(windowWidth, windowHeight);
    }
    else if (mode == 3){
        nextImage();
    }
}

function draw() {
    if (pause){
        return;
    }
    if (mode == 1){
        for (let j = particles.length - 1; j > 0; j--) {
            particles[j].update();
            particles[j].show();
            if (particles[j].finished()) {
                particles.splice(j, 1);
                background(0, 0, 5, 0.1);
            }
        }
            
        for (let i = particles.length; i < parNum; i++) {
            particles.push(new Particle(random(width), random(height)));
        } // パーティクルを補充
    }
    else if (mode == 2){
        // blendMode(BLEND);
        // background("#202020");
        randomSeed(seed);
        push();
        translate(width / 2, height / 2);
        rotate(random(TAU) + t);
        background(0, 0, 5, 0.1);
        for (let i = 0; i < num; i++) {
            let a = (TAU / num) * i + t
            let x = radius * sin(a - t) / random(1.5, 1.0) / random(1, 20);
            let y = radius * cos(a + t) / random(1, 1.5) /  random(1, 2);
            fill(random(color_tile[color_vision]));
            noStroke();
            let d = random(radius / 100, radius / 50) * random(2, 5) / 2;
            drawingContext.shadowColor = "#fffffbf";
            drawingContext.shadowOffsetX = 0;
            drawingContext.shadowOffsetY = 0;
            drawingContext.shadowBlur = 20;
            let x_plus = 0.01 * random(-d, d);

            push();
            translate(x + x_plus, y + d * cos(d) / 1);
            rotate(random(TAU) + random(1, 5) * t);
            if (i % 2 == 1) {
                rect(0, 0, d * sin(d) / random(12, 6), d * sin(d) / random(12, 6));
            } else {
                ellipse(0, 0, d * cos(d) / random(12, 6), d * cos(d) / random(12, 6));
            }
            pop();

            
            drawingContext.shadowColor = "#fffff40";
            drawingContext.shadowOffsetX = 0;
            drawingContext.shadowOffsetY = 0;
            drawingContext.shadowBlur = 0;
            noFill();
            stroke(random(color_tile[color_vision]));
            if (i % 3 == 0) {
                push();
                translate(x + x_plus, y + d * cos(d) / 1);
                rotate(random(TAU) - random(1, 5) * t);
                strokeWeight(sizes[i] / random(0.1, 0.5));
                square(random((x + x_plus) / 3 * 4, (x + x_plus) / 3), random((y + d * cos(d) / 1) / 3 * 4, (y + d * cos(d) / 1) / 3), random(d / 15));
                pop();
            }

            if (i % 4 == 1) {
                push();
                translate(x + x_plus, y + d * cos(d) / 1);
                rotate(random(TAU) + random(-t, t));
                strokeWeight(sizes[i] / random(0.1, 0.5));
                ellipse(random((x + x_plus) / 2 * 3, (x + x_plus) / 2), random((y + d * cos(d) / 1) / 2 * 3, (y + d * cos(d) / 1) / 2), random(d / 15), random(d / 15));
                pop();
            }
        }
        
        pop();

        t += random(0.001, 0.0005);
    }
    else if (mode == 3){
        background(0);
        for (var i = allParticles.length-1; i > -1; i--) {
            allParticles[i].move();
            allParticles[i].draw();
            
            if (allParticles[i].isKilled) {
            if (allParticles[i].isOutOfBounds()) {
                allParticles.splice(i, 1);
            }
            }
        }
    }

    if (showtext) {
        let current_time = millis();
        if (current_time < record_time + stay_time){
            displayMessage();
        }
        else{
            showtext = false;
        }
    }
    
    

}

function keyTyped() {
  if (key === "s" || key === "S") {
    pause = true;
    showtext = false;
    if (music_on){
        music_on = !music_on;
        sound.pause();
    }
  }
  if (key === "c" || key === "C") {
    pause = false;
    showtext = false;
    if (music_loop && !music_on){
        sound.loop();
        music_on = true;
    }
  }
}

function Refresh(){
    showtext = false;
    if (pause){
        pause = !pause;
    }
    background(0);
    noiseSeed()
    randomSeed()
    if (mode == 1){
        colors[0] = color(random(200) + 15, 90, 90, random(25, 50));
        colors[1] = color(random(180) + 175, 90, 90, random(1, 50));
        canvasImg = createImage(windowWidth, windowHeight);
        canvasImg.loadPixels();
    }
    else if (mode == 2){
        color_vision = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
        setcolor_tile();
        canvasImg = createImage(windowWidth, windowHeight);
        canvasImg.loadPixels();
    }
    else if (mode == 3){
        background(0);
  
        for (var i = allParticles.length-1; i > -1; i--) {
            allParticles[i].move();
            allParticles[i].draw();
            
            if (allParticles[i].isKilled) {
            if (allParticles[i].isOutOfBounds()) {
                allParticles.splice(i, 1);
            }
            }
        }
    }
    
    
    
}

function changeTheme(){
    mode += 1
    if (mode > 3){
        mode = 1;
    }
    noiseSeed()
    randomSeed()
    if (mode == 1){
        showtext = false;
        background(0);
        colors[0] = color(random(200) + 15, 90, 90, random(25, 50));
        colors[1] = color(random(180) + 175, 90, 90, random(1, 50));
        canvasImg = createImage(windowWidth, windowHeight);
        canvasImg.loadPixels();
    }
    else if (mode == 2){
        background(0);
        setcolor_tile();
        color_vision = random([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]);
        canvasImg = createImage(windowWidth, windowHeight);
        canvasImg.loadPixels();
    }
    else if (mode == 3){
        background(0);
        nextImage()
        
    }
    
}

function preload() {
    soundFormats('mp3', 'ogg');
    sound = loadSound("https://raw.githubusercontent.com/camifatechab/camilafatechab.github.io/master/betterday.mp3");
    var newImg = loadImage("https://raw.githubusercontent.com/camifatechab/camilafatechab.github.io/master/taylor.jpg");
    imgs.push(newImg);
}

function MusicOnOff(){
    if (music_loop){
        music_loop = !music_loop;
        sound.stop();
        music_on = false;
    }
    else{
        music_loop = !music_loop;
        music_on = true;
        // sound = loadSound('./a.mp3');
        sound.loop();
    }
}

function ShowMessage() {
    showtext = !showtext;
    record_time = millis();
    mode = 2;
    changeTheme();
}

function displayMessage() {
    push();
    fill(255);
    textAlign(CENTER, CENTER);
    textSize(32);
    text(message, width / 2, height / 2);
    pop();
}