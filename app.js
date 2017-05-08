// Import data and style
import './css/style.css';
import quotes from './data';
import gradients from "./gradients";


// Create a function that retrieves a random number between
// 0 and parameter given
function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}

function updateElementText(value, element, spacer) {
	if (spacer) {
		element.innerHTML = spacer + " <em>" + value + "</em>";
	} else {
		element.textContent = value;
	}
}

// Function to update gradient
function updateGradient(colors, elements) {
	var colorString;

	if (typeof colors === "object") {
		var colorString = colors.join(", ");
	} else {
		colorString = colors;
	}

	if (typeof elements === "object") {
		for (var i = 0; i < elements.length; i++) {
			elements[i].style.background = "linear-gradient(to right," +  colorString + ")";
		}
	} else {
		elements.style.background = "linear-gradient(to right," +  colorString + ")";
	}
}

// Get the button element
let domStrings = {
	quoteButton: document.getElementById('newQuote'),
	twitterButton: document.getElementById('tweet')
}

// Set up an eventlistener on the newQuote button
domStrings.quoteButton.addEventListener('click', () => {
	let quoteContainer, authorContainer, randomGradient;
	let quote = getRandomNumber(quotes.length);
	// Get the right quote from the quotes array
	quote = quotes[quote];
	
	// get the h1 and p elements
	quoteContainer = document.getElementById('quote');
	authorContainer = document.getElementById('author');

	// Update the elements using the previous function
	updateElementText(quote.quote, quoteContainer);
	updateElementText(quote.author, authorContainer, '-');

	// Update Gradients
	randomGradient = getRandomNumber(gradients.length);
	updateGradient(gradients[randomGradient].colors, [domStrings.quoteButton, domStrings.twitterButton, document.getElementsByTagName('body')[0]]);
});


// Twitter functionality

domStrings.twitterButton.addEventListener('click', e => {
	var tweetContent;
	// Stop form submitting
	e.preventDefault();
	tweetContent = document.getElementById('quote').textContent;
	window.location.href = "https://www.twitter.com/intent/tweet?text=" + tweetContent;
});







