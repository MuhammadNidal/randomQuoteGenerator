import { useState } from 'react';
import './App.css';

function App() {
  const successQuotes = [
    
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
    "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
    "Success is not in what you have, but who you are. - Bo Bennett",
    "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
    "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
    "Opportunities don't happen. You create them. - Chris Grosser",
    "Success is how high you bounce when you hit bottom. - George S. Patton",
    "The only place where success comes before work is in the dictionary. - Vidal Sassoon"
  ];

  const [quote, setQuote] = useState(successQuotes[0]);

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * successQuotes.length);
    setQuote(successQuotes[randomIndex]);
  };

  return (
    <div className="container">
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <button onClick={generateRandomQuote}>Generate Quote</button>
    </div>
  );
}

export default App;
