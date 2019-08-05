import React, { Component } from 'react';
import Navbar from './components/navbar/navbar';
import Jumbotron from './components/jumbotron/jumbotron';
import Wrapper from './components/wrapper/wrapper';



let imgArr = ['im1.jpg', 'im2.jpg', 'im3.jpg', 'im4.jpg', 'im5.jpg', 'im6.jpg', 'im7.jpg', 'im8.jpg', 'im9.jpg', 'im10.jpg', 'im11.jpg', 'im12.jpg'];

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };

  return arr;
};

class App extends Component {
  state = {
    userScore: 0,
    highScore: 0,
    alreadyClicked: [], // stores images that user has already selected
    isCorrect: "Click an image to begin!"
  };

  handleUserClick = event => {
    shuffle(imgArr);

    let userClicked = event.currentTarget.dataset.id;
    console.log(userClicked);
    console.log("clicked");

    if (this.state.alreadyClicked.every(x => x !== userClicked)) {
      console.log("has not been clicked yet");

      this.setState(prevState => ({
        alreadyClicked: [...prevState.alreadyClicked, userClicked],
        userScore: prevState.userScore + 1,
        isCorrect: "You guessed correctly!"
      }));
    }
    else {
      console.log("You've already clicked this.");

      if (this.state.userScore > this.state.highScore) {
        this.setState({
          highScore: this.state.userScore
        });
      }

      this.setState({
        userScore: 0,
        alreadyClicked: [],
        isCorrect: "You guessed incorrectly!"
      });
    };

    console.log("already clicked array:");
    console.log(this.state.alreadyClicked);
    console.log("User score: " + this.state.userScore);
  };

  componentDidMount() {
    shuffle(imgArr);

    this.setState({
      userScore: 0,
      alreadyClicked: []
    });
  };

  render() {
    return (
      <div className="App" >
        <Jumbotron />
        <Navbar userScore={this.state.userScore} highScore={this.state.highScore} isCorrect={this.state.isCorrect} />
        
        <Wrapper imgsrc={imgArr} onClick={this.handleUserClick} />
      </div>
    );
  }
};

export default App;