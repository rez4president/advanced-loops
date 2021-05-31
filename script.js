const basket = ["Apples", "Oranges", "Bananas", "Grapes"]
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes: 1000,
}


/// FOR LOOP

for(let i = 0; i < basket.length; i++){
	console.log(basket[i]);
}

//// forEach LOOP

basket.forEach(item => {
	console.log(item);
});

/// New Loop - For of Loop

for (item of basket) {
  console.log(item);	
}


//// for in loop - Works in Objects

for (item in detailedBasket) {
	console.log(item)
}


// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
	let highest = 0;
	for(let i = 0; i < array.length; i++) {
		if(highest < arr[i]) {
			highest = arr[i];
		}
	}
	return highest;
}