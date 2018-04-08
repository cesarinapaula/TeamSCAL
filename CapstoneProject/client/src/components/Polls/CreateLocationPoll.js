import React from 'react';
import axios from 'axios';
import '../../index.css';
import RenderLocationPoll from './PollRenderingLocation';
import Timer from "./Timer";
import { Input, Button} from 'semantic-ui-react';

/*
const pollsStyleLoc = {
    alignContent:"center", 
    marginTop:'1vh', 
    border:"solid",
    width: "33%",
  //   position:"fixedRight",
  //   float: "right",
  //   marginRight:"33vw",
    margin:"0px auto",
    maxWidth:"40vw",
    paddingBottom:"4vh" 
  }
*/
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
            timerHidden: true,
            message: true,
            BaseValue: 0,
            TimerCountdownLoc:"",
        };
    }
    

    handleLocationQuestion = event => {
        this.setState({
            QuestionInput: event.target.value
        });
        console.log(this.state.QuestionInput);
    }

    //reduce to handleChoice, event.target.name
    handleChoice = e => {
        this.setState({ 
            [e.target.name]: e.target.value 
        });   
        console.log(this.state)
    }
  

    handleSubmitToDatabase = (event)=>{
        event.preventDefault();
        /*
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
            console.log(response);  */
            this.setState({
                formHidden: true,
                pollHidden: false,
                timerHidden:false
            });
            console.log(this.state);        
/*
        })
        .catch(function(err) {
            console.log(err);
        });   
*/
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
/*    axios.put(`http://localhost:3000/votinglocation/${this.state.uniquelink}`, {
        voteranswer: this.state.VoterAnswer
    })
    .then(response=>{
        console.log(response);
        console.log('inserted');  */
        this.setState({
            message: false,
            BaseValue: this.state.BaseValue + 1
        });
    /*
    })
    .catch(err=>{
        console.log(err);
    }); */
    };
//<p> Would you like to submit, another disappear function.
//this.handleNo = p= #id = disappear
render(){
        const formStyling = (this.state.formHidden ? 'hidden' : 'appear');
        const timerStyling = (this.state.timerHidden ? 'hidden' : 'appear');
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
                <strong><h3>Poll Creation For Location: </h3>
                <Input type='text' onInput={this.handleLocationQuestion} placeholder="Type Question Here"/></strong><br/>
                <h3>Enter your choices below!</h3>
                 <Input type='text' name ="ChoiceOne" onInput={this.handleChoice} placeholder="Enter first choice here" /><br/>
                 <Input type='text' name ="ChoiceTwo" onInput={this.handleChoice} placeholder="Enter second choice here" /><br/>
                 <Input type='text' name ="ChoiceThree" onInput={this.handleChoice} placeholder="Enter third choice here"/><br/>
                 <Input type='text' name ="ChoiceFour" onInput={this.handleChoice} placeholder="Enter fourth choice here"/><br/>
                <Input type='text' name ="ChoiceFive" onInput={this.handleChoice} placeholder="Enter fifth choice here"/><br/>
                
                <h3>Set a timer for your Poll:</h3><br/>
                Format time in military time and date as shown<br/>
                <Input type='text' name = "TimerCountdownLoc" onInput={this.handleChoice} placeholder="MM/DD/YY XX:XX"/><br/>
                <br/>
                <Button onClick={this.handleSubmitToDatabase}>Create Your Poll!</Button>

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