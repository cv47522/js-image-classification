/* ===
ml5 Example
Simple Image Classification using MobileNet
This example uses promises to create the classifier
=== */

const image = document.getElementById('image');
const result = document.getElementById('result');
const probability = document.getElementById('probability');

// Initialize the Image Classifier method with MobileNet
ml5.imageClassifier('MobileNet')
  .then(classifier => classifier.classify(image))
  .then(results => {
    result.innerText = results[1].label;
    probability.innerText = results[1].confidence.toFixed(4);
  })



//------------------------ How Promise Object works ------------------
// Example 1
let p = new Promise((fulfillFunc, rejectFunc) => {
  let equation = ((1 + 2) == 2) ? fulfillFunc('Sucess') : rejectFunc('Failed');
});

// p.then(/* The result of equation corresponds to "fulfillFunc" */).catch(/* ...corresponds to "rejectFunc" */)
p.then(message => {
  console.log('This is in the "then": ' + message);
}).catch(message => {
  console.log('This is in the "catch": ' + message);
});

// Example 2
let userLeft = true;
let userWatchingCatMeme = false;

function watchTVPromise() {
  return new Promise((fulfillFunc, rejectFunc) => {
    if (userLeft) {
    	rejectFunc({
      	name: 'User Left',
      	message: ':(',
    	});
    }else if (userWatchingCatMeme) {
      rejectFunc({
        name: 'User Watching Cat Meme',
      	message: ':)',
      });
    }else {
      fulfillFunc('What are you watching?');
    }
  })
}

watchTVPromise().then(message => {
	console.log('Sucess: ' + message);
}).catch(error => {
	console.log(error.name + ' ' + error.message);
});

// Example 3
const recordVideoOne = new Promise((fulfill, reject) => {
  fulfill('Video 1 Recorded');
});
const recordVideoTwo = new Promise((fulfill, reject) => {
  fulfill('Video 2 Recorded');
});
const recordVideoThree = new Promise((fulfill, reject) => {
  fulfill('Video 3 Recorded');
});

// Render the fastest one first, then following on
Promise.race([
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(message => { console.log(message); });
//------------------------------------------------------------------
