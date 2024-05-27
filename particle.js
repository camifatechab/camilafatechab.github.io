function Particle(x, y) {
  this.x = x;
  this.y = y;
  this.pos = createVector(this.x, this.y);

  this.life = random(1);
  this.c = color(random(colors));
  this.ff = 0;

  this.update = function () {
    this.ff = noise(this.pos.x / 100, this.pos.y / 100) * TWO_PI; // Flow Field
    let mainP = 1200;
    let changeDir = TWO_PI / mainP; // 方向を変わる
    let roundff = round((this.ff / TWO_PI) * mainP); // round ff
    // *** main point *** //
    this.ff = changeDir * roundff; // 新方向
    
    if (this.ff < 6 && this.ff > 3) {
      this.c = colors[0];
      stroke(this.c);
      this.pos.add(tan(this.ff)*random(1,3), tan(this.ff));
    } else {
      this.c = colors[1];
      stroke(this.c);
      this.pos.sub(sin(this.ff)*random(0.1,1), cos(this.ff));
    }
  };

  this.show = function () {
    noFill();
    strokeWeight(random(1.25));
    let lx = 20;
    let ly = 20;
    let px = constrain(this.pos.x, lx, width - lx);
    let py = constrain(this.pos.y, ly, height - ly);
    point(px, py);
  };

  this.finished = function () {
    this.life -= random(random(random(random()))) / 10;
	this.life = constrain(this.life, 0, 1);
    if (this.life == 0) {
      return true;
    } else {
      return false;
    }
  };
}
