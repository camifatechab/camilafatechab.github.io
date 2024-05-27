//color
let color_tile = [];
let colors0 = "281914-1a1a1a-202020-242e30".split("-").map((a) => "#" + a);
let colors1 = "fef9fb-fafdff-ffffff-fcfbf4-f9f8f6".split("-").map((a) => "#" + a);

let newTone1 = "FF9494-FFD1D1-FFE3E1-FFF5E4-001B79-DA0C81".split("-").map((a) => "#" + a);
let newTone2 = "967E76-D7C0AE-EEE3CB-B7C4CF".split("-").map((a) => "#" + a);
let newTone3 = "EEF1FF-D2DAFF-AAC4FF-B1B2FF-363062-A25772".split("-").map((a) => "#" + a);
let newTone4 = "E38B29-F1A661-FFD8A9-FDEEDC-22092C-748E63".split("-").map((a) => "#" + a);
let newTone5 = "FFC3A1-F0997D-D3756B-A75D5D".split("-").map((a) => "#" + a);
let newTone6 = "374259-545B77-5C8984-F2D8D8".split("-").map((a) => "#" + a);
let newTone7 = "675D50-ABC4AA-F3DEBA-A9907E".split("-").map((a) => "#" + a);
let newTone8 = "F5F5F5-E8E2E2-F99417-5D3891".split("-").map((a) => "#" + a);
let newTone9 = "EAE0DA-F7F5EB-A0C3D2-EAC7C7-461959-E966A0-2B2730".split("-").map((a) => "#" + a);
let newTone10 = "EEF5FF-9EB8D9-7C93C3-A25772-164863".split("-").map((a) => "#" + a);
let newTone11 = "82954B-BABD42-EFD345-FFEF82-004225".split("-").map((a) => "#" + a);
let newTone12 = "146C94-19A7CE-B0DAFF-FEFF86".split("-").map((a) => "#" + a);
let newTone13 = "e8e8e8-b7b7b7-8c8c8c-525252-202020".split("-").map((a) => "#" + a); //B&W
let newTone14 = "E8F3D6-FCF9BE-FFDCA9-FAAB78-7D6E83".split("-").map((a) => "#" + a);
let newTone15 = "DFA67B-F4B183-FFD966-FFF2CC-B46060".split("-").map((a) => "#" + a);
let newTone16 = "403738-D9AA55-D9C2A7-D9501E-A62F14".split("-").map((a) => "#" + a);
let newTone17 = "F2F2F2-6A8FA6-BACDD9-5C8C46-BF4F36".split("-").map((a) => "#" + a);
let newTone18 = "4B5940-7A8C68-99A686-BFB7A8-F2F2F2".split("-").map((a) => "#" + a);
let newTone19 = "AAABA8-BC7B77-CD9B9D-DBC7C9-88A795-033540".split("-").map((a) => "#" + a);
let newTone20 = "F1EBD8-F1EBD8-F1EBD8-E4BA6A-E4BA6A-787D46-787D46-7D4E25-222B1B".split("-").map((a) => "#" + a);
let newTone21 = "ECE9E4-ECE9E4-ECE9E4-E1D8D1-E1D8D1-C3B39D-D6AB7E-D18A39-D18A39".split("-").map((a) => "#" + a);
let newTone22 = "dcdde2-dcdde2-b7ced2-b7ced2-a19a90-636250-636250-528e86".split("-").map((a) => "#" + a);
let newTone23 = "001219-005f73-0a9396-94d2bd-e9d8a6-ee9b00-ca6702-bb3e03-ae2012-9b2226".split("-").map((a) => "#" + a);
let newTone24 = "22577a-38a3a5-57cc99-80ed99-c7f9cc-f2f9e8-f9f9f9".split("-").map((a) => "#" + a);
let newTone25 = "314A66-1F5C81-547890-C6DCD0-EDE9D5-F3C1A1".split("-").map((a) => "#" + a);
let newTone26 = "434BF6-3234FB-5157D0-8286FF-B596F1-F87AC0-FBCAB1-FCB895-FCC38D-FDE7D7".split("-").map((a) => "#" + a);
let newTone27 = "386641-6A994E-A7C957-F2E8CF-E6D7B2-3A4D3E-152925".split("-").map((a) => "#" + a);
let newTone28 = "004225-F5F5DC-FFB000-FFCF9D".split("-").map((a) => "#" + a);

function setcolor_tile() {
	color_tile[1] = newTone1;
	color_tile[2] = newTone2;
	color_tile[3] = newTone3;
	color_tile[4] = newTone4;
	color_tile[5] = newTone6;
	color_tile[6] = newTone6;
	color_tile[7] = newTone7;
	color_tile[8] = newTone8;
	color_tile[9] = newTone9;
	color_tile[10] = newTone10;
	color_tile[11] = newTone11;
	color_tile[12] = newTone12;
	color_tile[13] = newTone13;
	color_tile[14] = newTone14;
	color_tile[15] = newTone15;
	color_tile[16] = newTone16;
	color_tile[17] = newTone17;
	color_tile[18] = newTone18;
	color_tile[19] = newTone19;
	color_tile[20] = newTone20;
	color_tile[21] = newTone21;
	color_tile[22] = newTone22;
	color_tile[23] = newTone23;
	color_tile[24] = newTone24;
	color_tile[25] = newTone25;
	color_tile[26] = newTone26;
	color_tile[27] = newTone27;
	color_tile[28] = newTone28;
}


//filter
function makeFilter() {
	let filterNum = int(Math.random() * 9999);
	randomSeed(seed);
	// noiseのフィルターをつくる
	colorMode(HSB, 360, 100, 100, 100);
	drawingContext.shadowColor = color(0, 0, 5, 10);
	overAllTexture = createGraphics(width, height);
	overAllTexture.loadPixels();
	for (var i = 0; i < width; i += 1) { // noprotect
		for (var j = 0; j < height; j += 1) {
			if (filterNum % 4 == 0) {
				overAllTexture.set(i, j, color(random(60), 5, 95, noise(i / 3, j / 3, (i * j) / 50) * 12)); // white
			} else if (filterNum % 4 == 1) {
				overAllTexture.set(i, j, color(48, 25, 98, noise(i / 3, j / 3, (i * j) / 50) * 12)); // yellow
			} else if (filterNum % 4 == 2) {
				overAllTexture.set(i, j, color(random(5, 8), 25, 98, noise(i / 3, j / 3, (i * j) / 50) * 12));
			} else if (filterNum % 4 == 3) {
				overAllTexture.set(i, j, color(random(200, 210), 10, 86, noise(i / 3, j / 3, (i * j) / 50) * 12));
			}
		}
	}
	overAllTexture.updatePixels();
}


function makeFilter2() {
	let filterNum = int(Math.random() * 9999);
	randomSeed(seed);
	// noiseのフィルターをつくる
	colorMode(HSB, 360, 100, 100, 100);
	drawingContext.shadowColor = color(0, 0, 5, 10);
	overAllTexture2 = createGraphics(width, height);
	overAllTexture2.loadPixels();
	for (var i = 0; i < width; i += random([5])) { // noprotect
		for (var j = 0; j < height; j += random([5])) {
			if (filterNum % 4 == 0) {
				overAllTexture2.set(i, j, color(random(60), 5, 95, noise(i / 3, j / 3, (i * j) / 50) * 12)); // white
			} else if (filterNum % 4 == 1) {
				overAllTexture2.set(i, j, color(48, 25, 98, noise(i / 3, j / 3, (i * j) / 50) * 12)); // yellow
			} else if (filterNum % 4 == 2) {
				overAllTexture2.set(i, j, color(random(5, 8), 25, 98, noise(i / 3, j / 3, (i * j) / 50) * 12));
			} else if (filterNum % 4 == 3) {
				overAllTexture2.set(i, j, color(random(60), 5, 10, noise(i / 3, j / 3, (i * j) / 50) * 12)); // black
			}
		}
	}
	overAllTexture2.updatePixels();
}

function drawOverPattern() {
	push();
	translate(width / 2, height / 2);
	//rotate(-PI / 2);

	let s = max(width, height) / 1 * sqrt(3) - 2;
	let n = 6;

	for (let theta = TWO_PI / 6; theta < TWO_PI; theta += TWO_PI / 6) { // noprotect
		divideOP(0, 0, s * cos(theta), s * sin(theta), s * cos(theta + TWO_PI / 6), s * sin(theta + TWO_PI / 6), n);
	}
	pop();
}

function prop(x1, y1, x2, y2, k) {
	let x3 = (1 - k) * x1 + k * x2;
	let y3 = (1 - k) * y1 + k * y2;
	return [x3, y3];
}

function divideOP(x1, y1, x2, y2, x3, y3, n) {
	if (n > 1) {
		let [xA, yA] = prop(x1, y1, x2, y2, 1 / 3);
		let [xB, yB] = prop(x1, y1, x2, y2, 2 / 3);
		let [xC, yC] = prop(x2, y2, x3, y3, 1 / 3);
		let [xD, yD] = prop(x2, y2, x3, y3, 2 / 3);
		let [xE, yE] = prop(x3, y3, x1, y1, 1 / 3);
		let [xF, yF] = prop(x3, y3, x1, y1, 2 / 3);
		let [xG, yG] = prop(xF, yF, xC, yC, 1 / 2);
		divideOP(x1, y1, xA, yA, xF, yF, n - 1);
		divideOP(xA, yA, xB, yB, xG, yG, n - 1);
		divideOP(xB, yB, x2, y2, xC, yC, n - 1);
		divideOP(xG, yG, xF, yF, xA, yA, n - 1);
		divideOP(xC, yC, xG, yG, xB, yB, n - 1);
		divideOP(xF, yF, xG, yG, xE, yE, n - 1);
		divideOP(xG, yG, xC, yC, xD, yD, n - 1);
		divideOP(xD, yD, xE, yE, xG, yG, n - 1);
		divideOP(xE, yE, xD, yD, x3, y3, n - 1);
	} else {
		makeTriangle([x1, y1], [x2, y2], [x3, y3]);
	}
}

function makeTriangle(v1, v2, v3) {
	let points = shuffle([v1, v2, v3]);
	let [x1, y1] = points[0];
	let [x2, y2] = points[1];
	let [x3, y3] = points[2];
	let iStep = 1 / (pow(2, floor(random(4, 2))));
	for (let i = 0; i < 1; i += iStep) { // noprotect
		let [x4, y4] = prop(x1, y1, x2, y2, 1 - i);
		let [x5, y5] = prop(x1, y1, x3, y3, 1 - i);
		triangle(x1, y1, x4, y4, x5, y5);
	}
}