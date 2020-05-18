import React from "react";
import QuoteAndAuthor from "./QuoteAndAuthor.js";
import quotes from './QuotesDatabase.js';
import backgrounds from './Backgrounds.js';
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      quote: quotes[0].quote,
      movie: quotes[0].movie,
      year: quotes[0].year,
      background: backgrounds[0].source
    };
  }
  randomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
  }
  shuffleQuotes(array){
    return array.sort(()=>Math.random()-0.5)
  }

  randomBackground() {
    const randomNumber2 = Math.floor(Math.random() * backgrounds.length);
    return backgrounds[randomNumber2];
  }
  shuffleBackgrounds(array){
    return array.sort(()=>Math.random()-0.5)
  }

  handleClick = () => {
    const generateRandomQuote = this.randomQuote();
    const generateRandomBackground = this.randomBackground();
    this.setState({
      quote: generateRandomQuote.quote,
      movie: generateRandomQuote.movie,
      year: generateRandomQuote.year,
      background: generateRandomBackground.source
    });
    this.shuffleQuotes(quotes);
    this.shuffleBackgrounds(backgrounds);
  };
  
  render() {
    return (
      <div>
        <QuoteAndAuthor
          handleClick={this.handleClick}
          {...this.state}
        />
      </div>
    );
  }
}

export default App;