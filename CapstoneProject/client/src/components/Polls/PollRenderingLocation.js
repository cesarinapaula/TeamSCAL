import React from 'react';
import Timer from "./Timer";
import '../../index.css';
import {button} from "semantic-ui-react"

export default class RenderLocationPoll extends React.Component{
    render(){
        const { styling, choiceOne, choiceTwo, choiceThree, choiceFour, choiceFive, handleSelect, handleVote, submitVote, hiddenOrAppear3, hiddenOrAppear4, hiddenOrAppear5} = this.props;
    
        return(
        <div className={styling}>
            <h3>Vote for where you want to go!</h3>
                <label><input type='radio' value={choiceOne} name='location' onChange={handleSelect}/>{choiceOne}</label><br/>
                <label><input type='radio' value={choiceTwo} name='location' onChange={handleSelect}/>{choiceTwo}</label><br/>
                <label id={hiddenOrAppear3}><input type='radio' value={choiceThree} name='location' onChange={handleSelect}/>{choiceThree}</label><br/>
                <label id={hiddenOrAppear4}><input type='radio' value={choiceFour} name='location' onChange={handleSelect}/>{choiceFour}</label><br/>
                <label id={hiddenOrAppear5}><input type='radio' value={choiceFive} name='location' onChange={handleSelect}/>{choiceFive}</label><br/>
              <button onClick={handleVote} button class="ui blue button">Vote</button>
                <button onClick={submitVote} class="ui blue button">Final Answer?</button>
        </div>
    )
}
}
