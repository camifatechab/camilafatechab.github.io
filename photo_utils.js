/**
Randomly uses an angle and magnitude from supplied position to get a new position.
@param {number} x
@param {number} y
@param {number} mag
@return {p5.Vector}
@param {string} label
@param {number} minValue
@param {number} maxValue
@param {number} defaultValue
@param {number} steps
@param {number} posx
@param {number} posy
*/

function generateRandomPos(x, y, mag) {
  var pos = new p5.Vector(x, y);
  
  var randomDirection = new p5.Vector(random(width), random(height));
  
  var vel = p5.Vector.sub(randomDirection, pos);
  vel.normalize();
  vel.mult(mag);
  pos.add(vel);
  
  return pos;
}


/**
Dynamically adds/removes particles to make up the next image.
*/
function nextImage() {
  // Switch index to next image.
  imgIndex = 0;
  imgs[imgIndex].loadPixels();
  
  // Create an array of indexes from particle array.
  var particleIndexes = [];
  for (var i = 0; i < allParticles.length; i++) {
    particleIndexes.push(i);
  }
  
  var pixelIndex = 0;
  
  // Go through each pixel of the image.
  for (var y = 0; y < imgs[imgIndex].height; y++) {
    for (var x = 0; x < imgs[imgIndex].width; x++) {
      // Get the pixel's color.
      var pixelR = imgs[imgIndex].pixels[pixelIndex];
      var pixelG = imgs[imgIndex].pixels[pixelIndex+1];
      var pixelB = imgs[imgIndex].pixels[pixelIndex+2];
      var pixelA = imgs[imgIndex].pixels[pixelIndex+3];
      
      pixelIndex += 4;
      
      // Give it small odds that we'll assign a particle to this pixel.
      if (random(1.0) > loadPercentage*2) {
        continue;
      }
      
      var pixelColor = color(pixelR, pixelG, pixelB);
      
      if (particleIndexes.length > 0) {
        // Re-use existing particle.
        var index = particleIndexes.splice(random(particleIndexes.length-1), 1);
        var newParticle = allParticles[index];
      } else {
        // Create a new particle.
        var newParticle = new Particle_photo(width/2, height/2);
        allParticles.push(newParticle);
      }
      
      newParticle.target.x = x+width/2-imgs[imgIndex].width/2;
      newParticle.target.y = y+height/2-imgs[imgIndex].height/2;
      newParticle.endColor = pixelColor;
    }
  }
  
  // Kill off any left over particles that aren't assigned to anything.
  if (particleIndexes.length > 0) {
    for (var i = 0; i < particleIndexes.length; i++) {
      allParticles[particleIndexes[i]].kill();
    }
  }
  canvasImg = createImage(windowWidth, windowHeight);
}


function SliderLayout(label, minValue, maxValue, defaultValue, steps, posx, posy) {
  
  this.label = label;
  this.slider = createSlider(minValue, maxValue, defaultValue, steps);
  this.slider.position(posx, posy);
  
  this.display = function() {
    var sliderPos = this.slider.position();
    
    noStroke();
    fill(0);
    textSize(15);
    text(this.label, sliderPos.x, sliderPos.y-10);

    fill(0);
    text(this.slider.value(), sliderPos.x+this.slider.width+10, sliderPos.y+10);
  }
}