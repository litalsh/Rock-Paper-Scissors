import React, {useState}  from 'react';
import './App.css';

function App() {
  const optionsArray = [{item: 'rock', image: './images/rock.svg'}, 
                        {item: 'paper', image: './images/paper.svg'}, 
                        {item: 'scissors', image: './images/scissors.svg'}];

  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [userSelectDisplay, setUserSelectDisplay] = useState(null);
  const [computerSelectDisplay, setComputerSelectDisplay] = useState(null);

  let userSelected;
  let computerResult;

  const random = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    return optionsArray[randomNumber]
  };

  const whoWon = (user, computer) => {
    if (user === computer) {
      return 'tie'
    }
    if (user === 'rock' && computer === 'paper') {
      return 'computer'
    }
    if (user === 'rock' && computer === 'scissors') {
      return 'user';
    }
    if (user === 'paper' && computer === 'rock') {
      return 'user'
    }
    if (user === 'paper' && computer === 'scissors') {
      return 'computer'
    }
    if (user === 'scissors' && computer === 'rock') {
      return 'computer'
    }
    if (user === 'scissors' && computer === 'paper') {
      return 'user'
    }
  };

  const selectHandler = (userSelection) => {
    console.log('user: ', userScore, 'computer: ', computerScore  );
    console.log(userSelection);
    setUserSelectDisplay(userSelection.image);
    computerResult = random();
    setComputerSelectDisplay(computerResult.image);
    console.log(computerResult);
    let result = whoWon(userSelection.item, computerResult.item);
    console.log(result);
    if (result === 'user') {
      setUserScore(userScore + 1 )
    }
    if (result === 'computer') {
      setComputerScore(computerScore + 1)
    } 
  }
  const firstLoad = () => {
    return (
      <>

        {console.log('first load ' + ' userselected: ' + userSelected)}
      </>
    )
  }


  return (
    <div className="App">
      <div className='board'>
        <div className='scores'>
          <span className="score"><strong>Human :  </strong>{userScore}</span>
          <span  className="score"><strong>Computer :  </strong>{computerScore}</span>
        </div>
        <div className='palyers-container'>
          <div className='players'><img src={userSelectDisplay} /></div>
          <div className='players'><img src={computerSelectDisplay} /></div>
        </div>        
        <div className='selections-container'>
          <h3>Choose you weapon</h3>
          <div>
          <button className='selection-btn' onClick={() => selectHandler(optionsArray[0])}><img src='./images/rock.svg' /></button>
          <button className='selection-btn' onClick={() => selectHandler(optionsArray[1])}><img src='./images/paper.svg' /></button>
          <button className='selection-btn' onClick={() => selectHandler(optionsArray[2])}><img src='./images/scissors.svg' /></button>
          <button className='selection-btn' onClick={() => selectHandler(random())}><img src='./images/random.svg' /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
