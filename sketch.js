// Initialize the Image Classifier method with MobileNet

let classifier;
let puffin;

function preload() {
  classifier = ml5.imageClassifier('MobileNet', modelReady);
  puffin = loadImage('images/puffin.jpg', imageReady);
}

function setup() {
  createCanvas(640, 480);
  // Make a prediction with a selected image
  classifier.classify(puffin, gotResults);
  image(puffin, 0, 0, width, height);
}

// Custom Functions
function imageReady() {
  console.log('Image is ready!');
}

function modelReady() {
  console.log('Model Loaded!');
}

function gotResults(error, results) {
  if(error) {
    console.log(error);
  }else {
    console.log(results);
    let label = results[1].label;
    let conf = results[1].confidence;

    fill(0);
    textSize(64);
    text(label, 100, height - 100);
    createDiv(`Label: ${results[1].label}`);
    createDiv(`Confidence: ${nf(results[1].confidence, 1, 4)}`);
  }
}
