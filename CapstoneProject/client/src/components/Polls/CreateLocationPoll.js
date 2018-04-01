import React from 'react';
import axios from 'axios';
//import uuid from 'uuid';
//import { Redirect } from "react-router";
import '../../index.css';
import RenderLocationPoll from './PollRenderingLocation';

class CreateLocation extends React.Component{
    constructor(){
        super();
        this.state = {
            QuestionInput: '',
            SetQuestion: '',
            ChoiceOne: '',
            ChoiceTwo: '',
            ChoiceThree: null,
            ChoiceFour: null,
            ChoiceFive: null,
            uniquelink: 'lakern2314567abcdefghijklm',
            SelectedValue: '',
            VoterAnswer: '',
            formHidden: false,
            pollHidden: true,
            message: true,
            renderSubmitButton: false,
            BaseValue: 0
        };
    }

    handleLocationQuestion = event => {
        this.setState({
            QuestionInput: event.target.value
        });
        console.log(this.state.QuestionInput);
    }

    //reduce to handleChoice, event.target.name
    handleChoice1 = event => {
        this.setState({
            ChoiceOne: event.target.value
        });
        console.log(this.state.ChoiceOne)
        
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

    handleSubmitToDatabase = (event)=>{
        axios
        .post("http://localhost:3000/createpolllocation", {
            uniquelink: this.state.uniquelink,
            question2: this.state.QuestionInput,
            choice2a: this.state.ChoiceOne,
            choice2b: this.state.ChoiceTwo,
            choice2c: this.state.ChoiceThree,
            choice2d: this.state.ChoiceFour,
            choice2e: this.state.ChoiceFive,
        }
        )
        .then(response => {
            console.log(response);
            this.setState({
                formHidden: true,
                pollHidden: false
            });
            console.log(this.state);        

        })
        .catch(function(err) {
            console.log(err);
        });   
};

handleSelect = (event)=>{
    this.setState({
        SelectedValue: event.target.value,
    });
    console.log(this.state.SelectedValue);
};

handleSubmitVote=()=>{
    console.log(this.state.SelectedValue);
    if(this.state.SelectedValue === this.state.ChoiceOne){
        this.setState({
            VoterAnswer: "answerlocationa"
        });
        console.log(this.state);
    } else if(this.state.SelectedValue === this.state.ChoiceTwo){
        this.setState({
            VoterAnswer: "answerlocationb"
        });
        console.log(this.state);
    } else if(this.state.SelectedValue === this.state.ChoiceThree){
        this.setState({
            VoterAnswer: "answerlocationc"
        });
        console.log(this.state);
    } else if (this.state.SelectedValue === this.state.ChoiceFour){
        this.setState({
            VoterAnswer: "answerlocationd"
        });
        console.log(this.state);
    } else if (this.state.SelectedValue === this.state.ChoiceFive){
        this.setState({
            VoterAnswer: "answerlocatione"
        });
        console.log(this.state);
}
};

    submitVote=()=>{
    axios.put(`http://localhost:3000/votinglocation/${this.state.uniquelink}`, {
        voteranswer: this.state.VoterAnswer
    })
    .then(response=>{
        console.log(response);
        console.log('inserted');
        this.setState({
            message: false,
            BaseValue: this.state.BaseValue + 1
        });
    })
    .catch(err=>{
        console.log(err);
    });
    };
//<p> Would you like to submit, another disappear function.
//this.handleNo = p= #id = disappear
render(){
        const formStyling = (this.state.formHidden ? 'hidden' : 'appear');
        const pollStyling = (this.state.pollHidden ? 'hidden' : 'appear');
        const messageStyling = (this.state.message ? 'hidden' : 'appear');
        const ChoiceThreeRender = (this.state.ChoiceThree === null ? 'hidden' : 'appear');
        const ChoiceFourRender = (this.state.ChoiceFour === null ? 'hidden' : 'appear');
        const ChoiceFiveRender = (this.state.ChoiceFive === null ? 'hidden' : 'appear');

 // const choiceThree = (this.state.Optional3 ? 'hidden' : 'appear');
//disable input field if previous values are === '', or null...what's better practice?
        return (
            <div>
            <div id={formStyling}>
                <br/>
                <strong>Poll Creation For Location: <input type='text' onInput={this.handleLocationQuestion} placeholder="Type Question Here"/></strong><br/><br/>
                Enter Your First Choice: <input type='text' onInput={this.handleChoice1} placeholder="Choice One" /><br/>
                Enter Your Second Choice: <input type='text' onInput={this.handleChoice2} placeholder="Choice Two" /><br/>
                Enter Your Third Choice: <input type='text' onInput={this.handleChoice3} placeholder="Choice Three"/><br/>
                Enter Your Fourth Choice: <input type='text' onInput={this.handleChoice4} placeholder="Choice Four"/><br/>
                Enter Your Fifth Choice: <input type='text' onInput={this.handleChoice5} placeholder="Choice Five"/><br/>
            
               <button onClick={this.handleSubmitToDatabase}>Create Your Poll!</button>
            </div>
            
            <RenderLocationPoll
                pollStyle={pollStyling}
                questionLocation={this.state.QuestionInput}
                    choiceOne={this.state.ChoiceOne}
                    choiceTwo={this.state.ChoiceTwo}
                    choiceThree={this.state.ChoiceThree}
                    choiceFour={this.state.ChoiceFour}
                    choiceFive={this.state.ChoiceFive}
                    handleSelect={this.handleSelect}
                    handleVote={this.handleSubmitVote}
                    submitVote={this.submitVote}
                    hiddenOrAppear3={ChoiceThreeRender}
                    hiddenOrAppear4={ChoiceFourRender}
                    hiddenOrAppear5={ChoiceFiveRender}
                />
        
            <div>
            <br/>
            <p id={messageStyling}>You've selected: {this.state.SelectedValue}</p>
            </div>
            </div>
        )
    }
}


export default CreateLocation;