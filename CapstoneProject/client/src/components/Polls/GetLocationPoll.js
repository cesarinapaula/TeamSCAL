import React from 'react';
import axios from 'axios';
import './index.css';
import RenderLocationPoll from './PollRendering';

class GetLocationPoll extends React.Component {
    constructor(){
        super();
        this.state = {
            choices: [],
            SelectedValue: '',
            VoterAnswer: '',
            didInviteeVote: false,
            uniquelink: "lakern23"
        };
    }
    //this.props.params.location
        componentDidMount= ()=> {
            axios.get(`http://localhost:3000/getlocationpoll/${this.state.uniquelink}`)
            .then(response => {
                this.setState({
                    ChoiceOne: response.data[0].choicelocationa,
                    ChoiceTwo: response.data[0].choicelocationb,
                    ChoiceThree: response.data[0].choicelocationc,
                    ChoiceFour: response.data[0].choicelocationd,
                    ChoiceFive: response.data[0].choicelocatione
                    
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

    //so this submit will now be a INSERT

        submitVote=()=>{
            axios.put(`http://localhost:3000/votinglocation/${this.state.uniquelink}`, {
                voteranswer: this.state.VoterAnswer
            })
            .then(response=>{
                console.log(response);
                console.log('inserted');
                this.setState({
                    Basevalue: this.state.Basevalue + 1
                })
            })
            .catch(err=>{
                console.log(err);
            });
        };
    

    render(){

        const ChoiceThreeRender = (this.state.ChoiceThree === null ? 'hidden' : 'appear');
        const ChoiceFourRender = (this.state.ChoiceFour === null ? 'hidden' : 'appear');
        const ChoiceFiveRender = (this.state.ChoiceFive === null ? 'hidden' : 'appear');
        const poll = 'poll';
        
        return (
            <div>
                <LocationPollRendering
                pollStyle={poll}
                questionLocation={this.state.Question}
                    choiceOne={this.state.ChoiceOne}
                    choiceTwo={this.state.ChoiceTwo}
                    choiceThree={this.state.ChoiceThree}
                    choiceFour={this.state.ChoiceFour}
                    choiceFive={this.state.ChoiceFive}
                    handleSelect={this.handleSelect}
                    handleVote={this.handleSubmit}
                    submitVote={this.submitVote}
                    hiddenOrAppear3={ChoiceThreeRender}
                    hiddenOrAppear4={ChoiceFourRender}
                    hiddenOrAppear5={ChoiceFiveRender}
                />
            </div>
        )
    }
    
}
export default GetLocationPoll;