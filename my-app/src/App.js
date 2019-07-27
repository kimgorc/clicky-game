//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/navbar";
import Jumbotron from "./components/jumbotron";
import Characters from "./components/characters";
import chars from "./chars.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    chars,
    clickedChar: [],
    score: 0
  };

//when you click on a card ... the character is taken out of the array
  imageClick = event => {
    const currentChar = event.target.alt;
    const CharAlreadyClicked =
      this.state.clickedChar.indexOf(currentChar) > -1;

//if you click on a character that has already been selected, the game is reset and cards reordered
    if (CharAlreadyClicked) {
      this.setState({
        chars: this.state.chars.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedChar: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available character, your score is increased and cards reordered
    } else {
      this.setState(
        {
          chars: this.state.chars.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedChar: this.state.clickedChar.concat(
            currentChar
          ),
          score: this.state.score + 1
        },
//if you get all 12 characters corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              fish: this.state.chars.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedChar: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.chars.map(chars => (
            <Characters
              imageClick={this.imageClick}
              id={chars.id}
              key={chars.id}
              image={chars.image}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default App;