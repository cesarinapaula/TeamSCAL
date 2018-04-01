import React from 'react';

export default class RenderLocationPoll extends React.Component{
    render(){
        const { pollStyle, questionLocation, choiceOne, choiceTwo, choiceThree, choiceFour, choiceFive, handleSelect, handleVote, submitVote, hiddenOrAppear3, hiddenOrAppear4, hiddenOrAppear5} = this.props;
    
        return(
        <div id={pollStyle}>
            <p>Poll :{questionLocation}</p>
            <label><input type='radio' value={choiceOne} onChange={handleSelect}/>{choiceOne}</label><br/>
            <label><input type='radio' value={choiceTwo} onChange={handleSelect}/>{choiceTwo}</label><br/>
            <label id={hiddenOrAppear3}><input type='radio' value={choiceThree} onChange={handleSelect}/>{choiceThree}</label><br/>
            <label id={hiddenOrAppear4}><input type='radio' value={choiceFour} onChange={handleSelect}/>{choiceFour}</label><br/>
            <label id={hiddenOrAppear5}><input type='radio' value={choiceFive} onChange={handleSelect}/>{choiceFive}</label><br/>
            <button onClick={handleVote}>Vote</button>
            <button onClick={submitVote}>Submit</button>
        </div>
    )
}
}


//export default = { RenderLocationPoll, RenderTimeDatePoll}