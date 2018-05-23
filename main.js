// alert(1);

document.getElementById("mainBody").addEventListener("submit", buttonGenerate);

var quotes = [
  ["Change the world by being yourself.", "Amy Poehler"],
  ["Every moment is a fresh beginning.", "T.S Eliot"],
  ["Never regret anything that made you smile.","Mark Twain"],
  ["Everything you can imagine is real.","Pablo Picasso"],
  ["Simplicity is the ultimate sophistication.","Leonardo da Vinci"],
  ["Wanting to be someone else is a waste of who you are.","Kurt Cobain"],
  ["And still I rise.","Maya Angelou"],
  ["May your choices reflect your hopes, not your fears.", "Nelson Mandela"],
  ["I will remember and recover, not forgive and forget.", "Unknown"],
  ["When words fail, music speaks.", "Shakespeare"],
  ["Where there is power, there is resistance.","Michel Foucault"],
  ["Be yourself; everyone else is already taken.","Oscar Wilde"],
  ["You only live once, but if you do it right, once is enough.","Mae West"],
  ["Be the change that you wish to see in the world.","Mahatma Gandhi"],
  ["Life is what happens to us while we are making other plans.","Allen Saunders"],
  ["It is never too late to be what you might have been.","George Eliot"],
  ["If you can't explain it to a six year old, you don't understand it yourself.","Albert Einstein"],
  ["There is no greater agony than bearing an untold story inside you.","Maya Angelou"],
  ["We don't see things as they are, we see them as we are.","Anaïs Nin"],
  ["We read to know we're not alone.","William Nicholson"]
];


function randQuote() {
  return Math.floor(Math.random() * quotes.length);
  // outputs a number from 0-9, which will be used in selecting the array
}

function generateQuote() {
  var quoteContainer = document.getElementById("quotebox");
  var authorContainer = document.getElementById("authorbox");
  var selectedQuote = randQuote();
  quoteContainer.innerHTML+= '&#8220' + quotes[selectedQuote][0] + '"';
  authorContainer.innerHTML+= "– " + quotes[selectedQuote][1];
}

function buttonGenerate(){
  document.getElementById('quotebox').innerHTML = "";
  document.getElementById('authorbox').innerHTML = "";
  generateQuote();
}

function tweetLink(){
  var tweetText = "https://twitter.com/intent/tweet?text="+document.getElementById("quotebox").innerHTML
  + " " + document.getElementById("authorbox").innerHTML + ". More quotes: " + "z-zang.github.io/Quote-Generator/";
  window.open(tweetText, "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0")

}
