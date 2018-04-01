import React from 'react';
import axios from 'axios';
import './index.css';

class CreateTimeAndDate extends React.Component{
    constructor(){
        super();
        this.state = {
            QuestionInput: '',
            SetQuestion: '',
            ChoiceOne: '',
            ChoiceTwo: '',
            ChoiceThree: '',
            ChoiceFour: '',
            ChoiceFive: '',
            ChoiceSix: '',
            ChoiceSeven: '',
            ChoiceEight: '',

            uniquelink: 'lkjfoaierinagwe',
            selectedAnswer: '',
            voterAnswer: '',

            formHidden: false,
            pollHidden: true,
            message: true,
            renderSubmitButton: false

        };
    }

    handlePollQuestion1 = event => {
        this.setState({
            QuestionInput: event.target.value
        });
        console.log(this.state.QuestionInput);
    }

//too many handleChoice, need the universal one
    
    handleChoice1 = event => {
        this.setState({
            ChoiceOne: event.target.value
        });
        
    }
    handleChoice2 = event => {
        this.setState({
            ChoiceTwo: event.target.value
        });
    };

    handleChoice3 = event => {
        this.setState({
            ChoiceThree: event.target.value
        });
    };
    handleChoice4 = event => {
        this.setState({
            ChoiceFour: event.target.value
        });
    };
    handleChoice5 = event => {
        this.setState({
            ChoiceFive: event.target.value
        });
    };

    handleChoice5 = event => {
        this.setState({
            ChoiceFive: event.target.value
        });
    };
    handleChoice6 = event => {
        this.setState({
            ChoiceSix: event.target.value
        });
    };
    handleChoice7 = event => {
        this.setState({
            ChoiceSeven: event.target.value
        });
    };
    handleChoice8 = event => {
        this.setState({
            ChoiceEight: event.target.value
        });
    };


   // handleStateUpdate= ()=> {
     //   this.setState({
       //     SetQuestion: this.state.QuestionInput,
         //   SetChoiceOne: this.state.ChoiceOne,
           // SetChoiceTwo: this.state.ChoiceTwo
    //    });
   //     console.log(this.state);
    

    handleSubmit = (event)=>{
        event.preventDefault();
//how to create event handler, shit!!!
        axios
        .post("http://localhost:3000/createpolltimeanddate", {
            uniquelink: this.state.uniquelink,
            question1: this.state.QuestionInput,
            choice1a: this.state.ChoiceOne,
            choice1b: this.state.ChoiceTwo,
            choice1c: this.state.ChoiceThree,
            choice1d: this.state.ChoiceFour,
            choice1e: this.state.ChoiceFive,
            choice1f: this.state.ChoiceSix,
            choice1g: this.state.ChoiceSeven,
            choice1h: this.state.ChoiceEight
        }
        )
        .then(response => {
            console.log(response);
        })
        .catch(function(err) {
            console.log(err);

        });   
        
            console.log(this.state);        
};
//decide between disabling fields until the previous has been filled, or just asking for more options.
    render(){

        const formStyling = (this.state.formHidden ? 'hidden' : 'appear');
        const pollStyling = (this.state.pollHidden ? 'hidden' : 'appear');
        const messageStyling = (this.state.message ? 'hidden' : 'appear');

        return (
            <div>
                Enter Your Question: <input type='text' onInput={this.handlePollQuestion1} placeholder="Type Question Here"/><br/>
                Enter Your First Choice: <input type='calendar' onInput={this.handleChoice1} placeholder="Choice One" /><br/>
                Enter Your Second Choice: <input type='calendar' onInput={this.handleChoice2} placeholder="Choice Two" /><br/>
                Would You Like To Input More Choices?
                <label>Enter Your Third Choice: <input type='text' onInput={this.handleChoice3} placeholder="Choice Three"/></div><br/>
                <label>Enter Your Fourth Choice: <input type='text' onInput={this.handleChoice4} placeholder="Choice Four"/></div><br/>
                <label>Enter Your Five Choice: <input type='text' onInput={this.handleChoice5} placeholder="Choice Five"/></div><br/>
                <label>Enter Your Sixth Choice: <input type='text' onInput={this.handleChoice5} placeholder="Choice Five"/></div><br/>
                <label>Enter Your Seventh Choice: <input type='text' onInput={this.handleChoice5} placeholder="Choice Five"/></div><br/>
                <label>Enter Your Eighth Choice: <input type='text' onInput={this.handleChoice5} placeholder="Choice Five"/></div><br/>

                <button onClick={this.handleSubmit}>Submit Your Poll!</button>
                    
            <div id={pollStyling}>
                <p>Poll: {this.state.QuestionInput}</p>
                <label><input type='radio' value={this.state.ChoiceOne} onChange={this.handleSelect}/>{this.state.ChoiceOne}</label><br/>
                <label><input type='radio' value={this.state.ChoiceTwo} onChange={this.handleSelect}/>{this.state.ChoiceTwo}</label><br/>
                <label><input type='radio' value={this.state.ChoiceThree} onChange={this.handleSelect}/>{this.state.ChoiceThree}</label><br/>
                <label><input type='radio' value={this.state.ChoiceFour} onChange={this.handleSelect}/>{this.state.ChoiceFour}</label><br/>
                <label><input type='radio' value={this.state.ChoiceFive} onChange={this.handleSelect}/>{this.state.ChoiceFive}</label><br/>

                <button onClick={this.handleSubmitVote}>Submit</button>
                <button onClick={this.submitVote}>Confirm Vote</button>
            </div>

            </div>
            
        )
    }
}

export default CreateTimeAndDate;