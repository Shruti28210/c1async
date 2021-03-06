import React from 'react'

function App() {

  const [score,setScore] = React.useState(76) ;
  const [wicket,setWicket] = React.useState(2);
  const [over,setOver] = React.useState(8.2);
  const [show,setshow] = React.useState("");


  const handleScore = (prev) =>{
      setScore(score + prev)
  }


  const handleWicket = (prev) =>{
    setWicket(wicket + prev)
  }

  const handleOver = (prev) =>{
    setOver(over + prev)
  }


  const textshow = ()=>{
    if(score > 100){
      setshow(<h3>India:india Won</h3>)
      
    }
    
  }


  return (
    <div className="App">
      <h3 onChange={() =>{textshow}}>India:</h3>
      <div className="banner">
        <div>
          Score:{score}
          <h1 className="scoreCount">
            {
              // show "score" here
            }
          </h1>
        </div>
        <div>
          Wicket:{wicket}
          <h1 className="wicketCount">
            {
              // show wicket here
            }
          </h1>
        </div>

        <div>
          Over:{over.toFixed(1)}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button className="addScore1" onClick={() => handleScore(1)}>Add 1</button>
        <button className="addScore4" onClick={() => handleScore(4)}>Add 4</button>
        <button className="addScore6" onClick={() => handleScore(6)}>Add 6</button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button onClick={() => handleWicket(1)}>Add 1 wicket</button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button onClick={() => handleOver(.1)}>Add 1</button>
      </div>
    

      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
