import { useState } from 'react';
import './rquotebox.css';

const quotes = [
  { quote: "You can have everything in life you want, if you will just help other people get what they want.", author: "Oscar" },
  { quote: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" },
  { quote: "That it will never come again is what makes life so sweet.", author: "Emily Dickinson" },
  { quote: "Quiet people have the loudest minds.", author: "Stephen King" },
  { quote: "A writer is someone for whom writing is more difficult than it is for other people.", author: "Thomas Mann" },
  { quote: "There is nothing like a dream to create the future.", author: "Victor" },
  { quote: "You cannot escape the responsibility of tomorrow by evading it today.", author: "Abraham Lincoln" },
  { quote: "You can never plan the future by the past", author: "Edmund" },
  { quote: "Tomorrow we will run faster, stretch out our arms farther….", author: "Scott" }
];

function RandomQuoteBox() {
  const [quote, setQuote] = useState(getRandomQuote());
  const [color, setColor] = useState('#4CAF50');

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function updateQuote() {
    const newQuote = getRandomQuote();
    setQuote(newQuote);

    const colors = ['#392b44', '#6f244e', '#ca135e', '#dde3f4', '#fe7c73', '#b23b6b', '#ffbdbd', '#FFA07A', '#F08080','#95d0dc','#dd585b','#82282b','#aface6','#ffbdbd'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColor(randomColor);
  }

  return (
    <div className="quote-box-container">
      <div className="quote-box" style={{ backgroundColor: color }}>
        <p className="quote-text">{quote.quote}</p>
        <p className="quote-author">{quote.author}</p>
      </div>
      <button className="quote-button" onClick={updateQuote}>New Quote</button>
    </div>
  );
}

export default RandomQuoteBox;
