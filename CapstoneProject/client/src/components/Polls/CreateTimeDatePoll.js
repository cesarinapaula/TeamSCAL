import React from 'react';
import axios from 'axios';
import '../../index.css';
import RenderTimeDatePoll from './PollRenderingTime';
/*
const pollsStyleDT = {
    alignContent:"center",
    postion:"absolute", 
    marginTop:'1vh', 
    border:"solid",
    width: "33%",
  //   float: "",
    marginRight:"33vw",
    maxWidth:"40vw",
    paddingBottom:"4vh" 
  }
*/
class CreateTimeAndDate extends React.Component{
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
            ChoiceSix: null,
            ChoiceSeven: null,
            ChoiceEight: null,

            uniquelink: 'lkjfoaierinagwe',
            SelectedAnswer: '',
            VoterAnswer: '',

            formHidden: false,
            pollHidden: true,
            message: true,

        };
    }

    handlePollQuestion = event => {
        this.setState({
            QuestionInput: event.target.value
        });
        console.log(this.state.QuestionInput);
    }

//too many handleChoice, need the universal one
    
    handleChoice = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
   


   // handleStateUpdate= ()=> {
     //   this.setState({
       //     SetQuestion: this.state.QuestionInput,
         //   SetChoiceOne: this.state.ChoiceOne,
           // SetChoiceTwo: this.state.ChoiceTwo
    //    });
   //     console.log(this.state);
   handleSubmitVote=()=>{
    console.log(this.state.SelectedValue);
    if(this.state.SelectedValue === this.state.ChoiceOne){
        this.setState({
            VoterAnswer: "answertda"
        });
        console.log(this.state);
    } else if(this.state.SelectedValue === this.state.ChoiceTwo){
        this.setState({
            VoterAnswer: "answertdb"
        });
        console.log(this.state);
    } else if(this.state.SelectedValue === this.state.ChoiceThree){
        this.setState({
            VoterAnswer: "answertdc"
        });
        console.log(this.state);
    } else if (this.state.SelectedValue === this.state.ChoiceFour){
        this.setState({
            VoterAnswer: "answertdd"
        });
        console.log(this.state);
    } else if (this.state.SelectedValue === this.state.ChoiceFive){
        this.setState({
            VoterAnswer: "answertde"
        });
        console.log(this.state);
    } else if (this.state.SelectedValue === this.state.ChoiceSix){
        this.setState({
            VoterAnswer: "answertdf"
        });
        console.log(this.state);
    } else if (this.state.SelectedValue === this.state.ChoiceSeven){
        this.setState({
            VoterAnswer: "answertdg"
        });
        console.log(this.state);
    } else if (this.state.SelectedValue === this.state.ChoiceEight){
        this.setState({
            VoterAnswer: "answertdh"
        });
        console.log(this.state);
    } 
};

    handleSubmit = (event)=>{
        this.setState({
            formHidden: true,
            pollHidden: false
        });
        console.log(this.state);
    }
/*        axios
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
*/

        submitVote=()=>{
            this.setState({
                message: false
            });
        };
//decide between disabling fields until the previous has been filled, or just asking for more options.
    render(){

        const formStyling = (this.state.formHidden ? 'hidden' : 'appear');
        const pollStyling = (this.state.pollHidden ? 'hidden' : 'appear');
        const messageStyling = (this.state.message ? 'hidden' : 'appear');  
        const ChoiceThreeRender = (this.state.ChoiceThree === null ? 'hidden' : 'appear');
        const ChoiceFourRender = (this.state.ChoiceFour === null ? 'hidden' : 'appear');
        const ChoiceFiveRender = (this.state.ChoiceFive === null ? 'hidden' : 'appear');
        const ChoiceSixRender = (this.state.ChoiceThree === null ? 'hidden' : 'appear');
        const ChoiceSevenRender = (this.state.ChoiceFour === null ? 'hidden' : 'appear');
        const ChoiceEightRender = (this.state.ChoiceFive === null ? 'hidden' : 'appear');

        return (
            <div id={formStyling}>
                <strong>Poll Creation For Date/Time: <input type='text' onInput={this.handleLocationQuestion} placeholder="Type Question Here"/></strong><br/><br/>
                Enter Your First Choice: <input type='calendar' name ="ChoiceOne" onInput={this.handleChoice} placeholder="Choice One" /><br/>
                Enter Your Second Choice: <input type='calendar' name ="ChoiceTwo"onInput={this.handleChoice} placeholder="Choice Two" /><br/>
                <label>Enter Your Third Choice: <input type='text' name ="ChoiceThree" onInput={this.handleChoice} placeholder="Choice Three"/></label><br/>
                <label>Enter Your Fourth Choice: <input type='text' name ="ChoiceFour" onInput={this.handleChoice} placeholder="Choice Four"/></label><br/>
                <label>Enter Your Five Choice: <input type='text' name ="ChoiceFive" onInput={this.handleChoice} placeholder="Choice Five"/></label><br/>
                <label>Enter Your Sixth Choice: <input type='text' name ="ChoiceSix" onInput={this.handleChoice} placeholder="Choice Five"/></label><br/>
                <label>Enter Your Seventh Choice: <input type='text' name ="ChoiceSeven" onInput={this.handleChoice} placeholder="Choice Five"/></label><br/>
                <label>Enter Your Eighth Choice: <input type='text' name ="ChoiceEight" onInput={this.handleChoice} placeholder="Choice Five"/></label><br/>
                <button onClick={this.handleSubmit}>Submit Your Poll!</button>
                    
                <RenderTimeDatePoll
                pollStyle={pollStyling}
                questionTimeDate={this.state.QuestionInput}
                    choiceOne={this.state.ChoiceOne}
                    choiceTwo={this.state.ChoiceTwo}
                    choiceThree={this.state.ChoiceThree}
                    choiceFour={this.state.ChoiceFour}
                    choiceFive={this.state.ChoiceFive}
                    choiceSix={this.state.ChoiceSix}
                    choiceSeven={this.state.ChoiceSeven}
                    choiceEight={this.state.ChoiceEight}
                    handleSelect={this.handleChoice}
                    handleSubmit={this.handleSubmitVote}
                    submitVote={this.submitVote}
                    hiddenOrAppear3={ChoiceThreeRender}
                    hiddenOrAppear4={ChoiceFourRender}
                    hiddenOrAppear5={ChoiceFiveRender}
                    hiddenOrAppear6={ChoiceSixRender}
                    hiddenOrAppear7={ChoiceSevenRender}
                    hiddenOrAppear8={ChoiceEightRender}
                />
            </div>

            
        )
    }
}

export default CreateTimeAndDate;