const quote = document.getElementById("quote");
const author = document.getElementById("author");

const api_url = "https://quotes-api-self.vercel.app/quote"

async function getquote(url) {
	const response = await fetch(url);
	let data = await response.json();
	quote.innerText = data.quote;
	author.innerText = data.author;
}
getquote(api_url);

function tweet(){
	window.open("https://twitter.com/intent/tweet?text=" + quote.innerText + " --- by " + author.innerText , "Tweet Window", "width=600", "height=300")
}