import React from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cards from "./cards.json";
import "./App.css";

let score=0;
let highscore=0;

class App extends React.Component {
  state = {
    cards: cards,
    score: score,
    highscore: highscore
  };

  handleScore = () => {
    this.setState({score:this.state.score+1})
  };

  removeCard = cardId => {
    console.log("removing card ", cardId);

    const newCardsList = this.state.cards.filter(card => {
      if (card.id === cardId) return false;
      else return true;
    });
    console.log(newCardsList);
    this.setState({ cards: newCardsList });
  };
  render = () => (
    <Wrapper>
      <h1 className="title">
        <img
          src="https://fontmeme.com/permalink/180813/2e4c4ef233b736d7b0a82e13ae50d829.png"
          alt="sesame-street-font"
          border="0"
        />
        <span class="margin-left">
          Current Score:
          {this.state.score} High Score:
          {this.state.highscore}
        </span>
      </h1>
      {this.state.cards.map(card => {
        return <a onClick={this.handleScore}><Card image={card.image} /></a>;
      })}
    </Wrapper>
  );
}

export default App;
