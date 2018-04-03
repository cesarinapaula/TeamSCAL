import React from 'react';
import Timer from "./Timer";


class RenderTimeDatePoll extends React.Component{
    render(){
        const { pollStyle, timerStyle, questionTimeDate, choiceOne, choiceTwo, choiceThree, choiceFour, choiceFive, choiceSix, choiceSeven, choiceEight, handleSelect, handleSubmit, submitVote, hiddenOrAppear3, hiddenOrAppear4, hiddenOrAppear5, hiddenOrAppear6, hiddenOrAppear7, hiddenOrAppear8} = this.props;

        return(
        <div>
            <div id={pollStyle}>
                <p>Poll: {questionTimeDate}</p>
                <label><input type='radio' value={choiceOne} onChange={this.handleSelect}/>{choiceOne}</label><br/>
                <label><input type='radio' value={choiceTwo} onChange={this.handleSelect}/>{choiceTwo}</label><br/>
                <label id={hiddenOrAppear3}><input type='radio' value={choiceThree} onChange={handleSelect}/>{choiceThree}</label><br/>
                <label id={hiddenOrAppear4}><input type='radio' value={choiceFour} onChange={handleSelect}/>{choiceFour}</label><br/>
                <label id={hiddenOrAppear5}><input type='radio' value={choiceFive} onChange={handleSelect}/>{choiceFive}</label><br/>
                <label id={hiddenOrAppear6}><input type='radio' value={choiceSix} onChange={handleSelect}/>{choiceSix}</label><br/>
                <label id={hiddenOrAppear7}><input type='radio' value={choiceSeven} onChange={handleSelect}/>{choiceSeven}</label><br/>
                <label id={hiddenOrAppear8}><input type='radio' value={choiceEight} onChange={handleSelect}/>{choiceEight}</label><br/>
                <button onClick={handleSubmit}>Pick Your Vote</button>
                <button onClick={submitVote}>Final Answer?</button>
            </div>
            <div id = {timerStyle}>
            <Timer/>
            </div>
        </div>
        )
    }
}

export default RenderTimeDatePoll;