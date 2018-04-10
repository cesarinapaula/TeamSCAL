import React from 'react';
import Timer from "./Timer";
import { Button } from 'semantic-ui-react';


export default class RenderTimeDatePoll extends React.Component{
    render(){
        const { choiceOne, choiceTwo, choiceThree, choiceFour, choiceFive, choiceSix, choiceSeven, choiceEight, handleSelect, handleSubmit, submitVote, hiddenOrAppear3, hiddenOrAppear4, hiddenOrAppear5, hiddenOrAppear6, hiddenOrAppear7, hiddenOrAppear8} = this.props;

        return(
        <div>
                <h4>Enter the time and date of your choice!</h4>
                <label><input type='radio' name='timedate'value={choiceOne} onChange={this.handleSelect}/>{choiceOne}</label><br/>
                <label><input type='radio' name='timedate' value={choiceTwo} onChange={this.handleSelect}/>{choiceTwo}</label><br/>
                <label id={hiddenOrAppear3}><input type='radio' name='timedate' value={choiceThree} onChange={handleSelect}/>{choiceThree}</label><br/>
                <label id={hiddenOrAppear4}><input type='radio' name='timedate' value={choiceFour} onChange={handleSelect}/>{choiceFour}</label><br/>
                <label id={hiddenOrAppear5}><input type='radio' name='timedate' value={choiceFive} onChange={handleSelect}/>{choiceFive}</label><br/>
                <label id={hiddenOrAppear6}><input type='radio' name='timedate' value={choiceSix} onChange={handleSelect}/>{choiceSix}</label><br/>
                <label id={hiddenOrAppear7}><input type='radio' name='timedate' value={choiceSeven} onChange={handleSelect}/>{choiceSeven}</label><br/>
                <label id={hiddenOrAppear8}><input type='radio' name='timedate' value={choiceEight} onChange={handleSelect}/>{choiceEight}</label><br/>
                <Button onClick={handleSubmit}>Pick Your Vote</Button>
                <Button onClick={submitVote}>Final Answer?</Button>
           
        </div>
        )
    }
}

