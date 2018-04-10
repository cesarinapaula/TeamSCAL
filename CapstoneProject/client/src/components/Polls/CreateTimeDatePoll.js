import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../../index.css';
import RenderTimeDatePoll from './PollRenderingTime';
import { Input, Button} from 'semantic-ui-react';
import ProgressBar from './ProgressBar';

class CreateTimeAndDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ChoiceOne: '', ChoiceTwo: '', ChoiceThree: null, ChoiceFour: null, 
            ChoiceFive: null, ChoiceSix: null, ChoiceSeven: null, ChoiceEight: null,

            AnswerOne: 0, AnswerTwo: 0, AnswerThree: 0, AnswerFour: 0,
            AnswerFive: 0, AnswerSix: 0, AnswerSeven: 0, AnswerEight: 0,

            uniqueurl: this.props.location.pathname.slice(-32),
            SelectedAnswer: '', VoterAnswer: '',

            formHidden: false, pollHidden: true, message: true, didTheyVoteTime: false,
            TotalSum: 1
        };
    }
    
        componentDidMount=()=>{
            axios.get(`http://localhost:3000/gettimedatepoll/${this.state.uniqueurl}`)
            .then(response => {
                if(response.data.length === 0){
                    this.setState({
                        formHidden: false,
                        pollHidden: true
                    });
                } else if(response.data.length > 0){
                    this.setState({
                        formHidden: true,
                        pollHidden: false,
                        ChoiceOne: response.data[0].choiceone,
                        ChoiceTwo: response.data[0].choicetwo,
                        ChoiceThree: response.data[0].choicethree,
                        ChoiceFour: response.data[0].choicefour,
                        ChoiceFive: response.data[0].choicefive,
                        ChoiceSix: response.data[0].choicesix,
                        ChoiceSeven: response.data[0].choiceseven,
                        ChoiceEight: response.data[0].choiceeight,

                        AnswerOne: response.data[0].answerone,
                        AnswerTwo: response.data[0].answertwo,
                        AnswerThree: response.data[0].answerthree,
                        AnswerFour: response.data[0].answerfour,
                        AnswerFive: response.data[0].answerfive,
                        AnswerSix: response.data[0].answersix,
                        AnswerSeven: response.data[0].answerseven,
                        AnswerEight: response.data[0].answereight,
                        TotalSum: (response.data[0].answerone) + (response.data[0].answertwo) + (response.data[0].answerthree) + (response.data[0].answerfour) + (response.data[0].answerfive) + (response.data[0].answersix) + (response.data[0].answerseven) + (response.data[0].answereight)
                    });
                }
            })
            .catch(err =>{
                console.log(`didn't work`);
            });

        }
        handleChoice = e => {
            this.setState({ 
                [e.target.name]: e.target.value 
            });   
            console.log(this.state)
    }
    
        handleSelect = (event) => {
            this.setState({
                SelectedAnswer: event.target.value
            });
            console.log(this.state.SelectedValue);
        };
   

        handleSubmitToDatabase = (event)=>{
            event.preventDefault();
            axios
            .post("http://localhost:3000/createtimedatepoll/", {
                uniqueurl: this.props.location.pathname.slice(-32),
                choiceone: this.state.ChoiceOne,
                choicetwo: this.state.ChoiceTwo,
                choicethree: this.state.ChoiceThree,
                choicefour: this.state.ChoiceFour,
                choicefive: this.state.ChoiceFive,
                choicesix: this.state.ChoiceSix,
                choiceseven: this.state.ChoiceSeven,
                choiceeight: this.state.ChoiceEight
            }
        )
        .then(response => {
            console.log(response);  
            this.setState({
                formHidden: true,
                pollHidden: false
            });
            console.log('it worked');        

        })
        .catch(function(err) {
            console.log(err);
        });   
    }

       handleSubmitVote=()=>{
        console.log(this.state.SelectedValue);
        if(this.state.SelectedValue === this.state.ChoiceOne){
            this.setState({
                VoterAnswer: "answerone",
                AnswerOne: this.state.AnswerOne + 1,
                TotalSum: this.state.TotalSum + 1
            });
            console.log(this.state);
        } else if(this.state.SelectedValue === this.state.ChoiceTwo){
            this.setState({
                VoterAnswer: "answertwo",
                AnswerTwo: this.state.AnswerTwo + 1,
                TotalSum: this.state.TotalSum + 1
            });
            console.log(this.state);
        } else if(this.state.SelectedValue === this.state.ChoiceThree){
            this.setState({
                VoterAnswer: "answerthree",
                AnswerThree: this.state.AnswerThree + 1,
                TotalSum: this.state.TotalSum + 1
            });
            console.log(this.state);
        } else if (this.state.SelectedValue === this.state.ChoiceFour){
            this.setState({
                VoterAnswer: "answerfour",
                AnswerFour: this.state.AnswerFour + 1,
                TotalSum: this.state.TotalSum + 1
            });
            console.log(this.state);
        } else if (this.state.SelectedValue === this.state.ChoiceFive){
            this.setState({
                VoterAnswer: "answerfive",
                AnswerFive: this.state.AnswerFive + 1,
                TotalSum: this.state.TotalSum + 1
            });
            console.log(this.state);
        } else if (this.state.SelectedValue === this.state.ChoiceSix){
            this.setState({
                VoterAnswer: "answersix",
                AnswerSix: this.state.AnswerSix + 1,
                TotalSum: this.state.TotalSum + 1
            });
            console.log(this.state);
        } else if (this.state.SelectedValue === this.state.ChoiceSeven){
            this.setState({
                VoterAnswer: "answerseven",
                AnswerSeven: this.state.AnswerSeven + 1,
                TotalSum: this.state.TotalSum + 1
            });
        console.log(this.state);
        } else if (this.state.SelectedValue === this.state.ChoiceEight){
            this.setState({
                VoterAnswer: "answereight",
                AnswerEight: this.state.AnswerEight + 1,
                TotalSum: this.state.TotalSum + 1
            });
        console.log(this.state);
        } 
    };
        
        submitVote=()=>{
            axios.put(`http://localhost:3000/votingtimedate/${this.props.location.pathname.slice(-32)}`, {
                voteranswer: this.state.VoterAnswer
            })
            .then(response=>{
                this.setState({
                    message: false,
                    didTheyVote: true
                });
            })
            .catch(err=>{
                console.log(err)
            });
            };
//decide between disabling fields until the previous has been filled, or just asking for more options.
            render(){
                const ChoiceThreeRender = (this.state.ChoiceThree === null  ? 'hidden' : 'appear');
                const ChoiceFourRender = (this.state.ChoiceFour === null ? 'hidden' : 'appear');
                const ChoiceFiveRender = (this.state.ChoiceFive === null ? 'hidden' : 'appear');
                const ChoiceSixRender = (this.state.ChoiceSix === null ? 'hidden' : 'appear');
                const ChoiceSevenRender = (this.state.ChoiceSeven === null ? 'hidden' : 'appear');
                const ChoiceEightRender = (this.state.ChoiceEight === null ? 'hidden' : 'appear');

            if(this.state.pollHidden){
                 return (
                    <div>
                    <h3>Enter up to eight choices for date and time!</h3>
                        <Input type='text' name ="ChoiceOne" onInput={this.handleChoice} placeholder="Enter first choice here"  /><br/>
                        <Input type='text' name ="ChoiceTwo"onInput={this.handleChoice} placeholder="Enter second choice here" /><br/>
                        <label><Input type='text' name ="ChoiceThree" onInput={this.handleChoice} placeholder="Enter third choice here" /></label><br/>
                        <label><Input type='text' name ="ChoiceFour" onInput={this.handleChoice} placeholder="Enter fourth choice here" /></label><br/>
                        <label><Input type='text' name ="ChoiceFive" onInput={this.handleChoice} placeholder="Enter fifth choice here" /></label><br/>
                        <label><Input type='text' name ="ChoiceSix" onInput={this.handleChoice} placeholder="Enter sixth choice here"/></label><br/>
                        <label><Input type='text' name ="ChoiceSeven" onInput={this.handleChoice} placeholder="Enter seventh choice here"/></label><br/>
                        <label><Input type='text' name ="ChoiceEight" onInput={this.handleChoice} placeholder="Enter eighth choice here"/></label><br/>
                        <br/>
                        <Button onClick={this.handleSubmitToDatabase}>Submit Your Poll!</Button>
                    </div>
                )
            } else if (!this.state.pollHidden && !this.state.didTheyVote){

                return(
                <div>

                <RenderTimeDatePoll
                    choiceOne={this.state.ChoiceOne}
                    choiceTwo={this.state.ChoiceTwo}
                    choiceThree={this.state.ChoiceThree}
                    choiceFour={this.state.ChoiceFour}
                    choiceFive={this.state.ChoiceFive}
                    choiceSix={this.state.ChoiceSix}
                    choiceSeven={this.state.ChoiceSeven}
                    choiceEight={this.state.ChoiceEight}
                    handleSelect={this.handleSelect}
                    handleSubmit={this.handleSubmitVote}
                    submitVote={this.submitVote}
                    hiddenOrAppear3={ChoiceThreeRender}
                    hiddenOrAppear4={ChoiceFourRender}
                    hiddenOrAppear5={ChoiceFiveRender}
                    hiddenOrAppear6={ChoiceSixRender}
                    hiddenOrAppear7={ChoiceSevenRender}
                    hiddenOrAppear8={ChoiceEightRender}
/>                </div>
            )
            } else if(!this.state.pollHidden && this.state.didTheyVoteTime){
                return(
                    <div>
                        <h4>You've selected: {this.state.SelectedValue}</h4>
                        <label>{this.state.ChoiceOne}
                        <ProgressBar 
                            value={this.state.AnswerOne} color={'blue'} total={this.state.TotalSum} /></label>
                       
                        <label>{this.state.ChoiceTwo}
                        <ProgressBar 
                            value={this.state.AnswerTwo} color={'green'}total={this.state.TotalSum} /></label>
                       
                        <label id={ChoiceThreeRender}>{this.state.ChoiceThree}
                        <ProgressBar 
                            value={this.state.AnswerThree} color={'violet'} total={this.state.TotalSum} /></label>
                       
                        <label id={ChoiceFourRender}>{this.state.ChoiceFour}
                        <ProgressBar 
                            value={this.state.AnswerFour} color={'red'} total={this.state.TotalSum} /></label>
                       
                        <label id={ChoiceFiveRender}>{this.state.ChoiceFive}
                        <ProgressBar 
                            value={this.state.AnswerFive} color={'black'} total={this.state.TotalSum} /></label>

                        <label id={ChoiceSixRender}>{this.state.ChoiceSix}
                        <ProgressBar value={this.state.AnswerSix} color={'olive'} total={this.state.TotalSum} /></label>
                        
                        <label id={ChoiceSevenRender}>{this.state.ChoiceSeven}
                        <ProgressBar 
                            value={this.state.AnswerSeven} color={'pink'} total={this.state.TotalSum} /></label>
                        
                        <label id={ChoiceEightRender}>{this.state.ChoiceEight}
                        <ProgressBar    
                            value={this.state.AnswerEight} color={'orange'} total={this.state.TotalSum} /></label>
                        <h3>Total number of votes: {this.state.TotalSum}</h3>
                </div>

            )
        }
    
    }
}

export default withRouter(CreateTimeAndDate);
