import React from 'react';
import axios from 'axios';
import RenderTimeDatePoll from './PollRendering';

class GetTimeDatePoll extends React.Component {
    constructor(){
        super();
        this.state = {
            ChoiceOne: '', ChoiceTwo: '', ChoiceThree: '', ChoiceFour: '',
            ChoiceFive: '', ChoiceSix: '', ChoiceSeven: '', ChoiceEight: '',
            
//Selected and committed answer. Base value is going to help ensure that people only vote once.
            BaseValue: 0,
            SelectedValue: '',
            VoterAnswer: '',
            finalanswer: '',

            uniqueurl: ''
        }
        this.props
    }

//Thinking: front page generates unique link, passes down link {this.seState({id: link})}
//From create poll, but just need the form initially. Front page has the question, passes question


//axios if we're creating the links first, to check if poll exists or not:  if question whatever is 
// === null, then response should be redirected to /createsaidpoll, if not, then /getpoll
//redirect should be presented as this.setState({redirect: false or true, depending})
//in the render, based on the state, then if(redirect) { return <CreatePoll/> } else return <GetPoll/>
//the answer will be an array, so array of this.state.choices: ''
        componentDidMount= ()=> {
            
            axios.get(`http://localhost:3000/checkingtimeanddate/${this.state.uniquelink}`)
            .then(response => {
                this.setState({
                   Question: response.data[0].questiontd,
                    ChoiceOne: response.data[0].choicetda,
                    ChoiceTwo: response.data[0].choicetdb,
                    ChoiceThree: response.data[0].choicetdc,
                    ChoiceFour: response.data[0].choicetdd,
                    ChoiceFive: response.data[0].choicetde,
                    ChoiceSix: response.data[0].choicetdf,
                    ChoiceSeven: response.data[0].choicetdg,
                    ChoiceEight: response.data[0].choicetdh
                });
            console.log(response.data[0]);
            })
            .catch(err =>{
                console.log(err);
            })

        };

        handleSelect = (event)=>{
            this.setState({
                SelectedValue: event.target.value,
            });
            console.log(this.state.SelectedValue);
        };

        handleSubmit=()=>{
            console.log(this.state.SelectedValue);
            if(this.state.SelectedValue === this.state.ChoiceOne){
                this.setState({
                    BaseValue: this.state.BaseValue + 1,
                    VoterAnswer: "answertda"
                });
                console.log(this.state);
            } else if(this.state.SelectedValue === this.state.ChoiceTwo){
                this.setState({
                    BaseValue: this.state.BaseValue + 1,
                    VoterAnswer: "answertdb"
                });
                console.log(this.state);
            } else if(this.state.SelectedValue === this.state.ChoiceThree){
                this.setState({
                    AnswerThree: this.state.BaseValue + 1,
                    VoterAnswer: "answertdc"
                });
                console.log(this.state);
            } else if (this.state.SelectedValue === this.state.ChoiceFour){
                this.setState({
                    AnswerFour: this.state.BaseValue + 1,
                    VoterAnswer: "answertdd"
                });
                console.log(this.state);
            } else if (this.state.SelectedValue === this.state.ChoiceFive){
                this.setState({
                    BaseValue: this.state.BaseValue + 1,
                    VoterAnswer: "answertde"
                });
                console.log(this.state);
            } else if (this.state.SelectedValue === this.state.ChoiceSix){
                this.setState({
                    BaseValue: this.state.BaseValue + 1,
                    VoterAnswer: "answertdf"
                });
                console.log(this.state);
            } else if (this.state.SelectedValue === this.state.ChoiceFour){
                this.setState({
                    BaseValue: this.state.BaseValue + 1,
                    VoterAnswer: "answertdg"
                });
                console.log(this.state);
            } else if (this.state.SelectedValue === this.state.ChoiceFour){
                this.setState({
                    BaseValue: this.state.BaseValue + 1,
                    VoterAnswer: "answertdh"
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
            })
            .catch(err=>{
                console.log(err);
            });
        };

//style display:hidden if Choices 3-8 are empty.


    render(){

const ChoiceThreeRender = (this.state.ChoiceThree === null ? 'hidden' : 'appear');
const ChoiceFourRender = (this.state.ChoiceFour === null ? 'hidden' : 'appear');
const ChoiceFiveRender = (this.state.ChoiceFive === null ? 'hidden' : 'appear');
const ChoiceSixRender = (this.state.ChoiceSix === null ? 'hidden' : 'appear');
const ChoiceSevenRender = (this.state.ChoiceSeven === null ? 'hidden' : 'appear');
const ChoiceEightRender = (this.state.ChoiceEight === null ? 'hidden' : 'appear');

        return (
            <div> 
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
                handleSelect={this.handleSelect}
                handleVote={this.handleSubmitVote}
                submitVote={this.submitVote}
                hiddenOrAppear3={ChoiceThreeRender}
                hiddenOrAppear4={ChoiceFourRender}
                hiddenOrAppear5={ChoiceFiveRender}
            />
            </div>
        )
    }
    
}
export default GetTimeDatePoll;