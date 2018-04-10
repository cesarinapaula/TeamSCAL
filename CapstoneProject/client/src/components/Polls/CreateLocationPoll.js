import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import '../../index.css';
import RenderLocationPoll from './PollRenderingLocation';
import { Input, Button } from 'semantic-ui-react';
import ProgressBar from './ProgressBar';

class CreateLocation extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ChoiceOne: '', ChoiceTwo: '', ChoiceThree: null, ChoiceFour: null, ChoiceFive: null,
            AnswerOne: '', AnswerTwo: '', AnswerThree: '', AnswerFour: '', AnswerFive: '',
            uniqueurl: this.props.location.pathname.slice(-32),
            SelectedValue: '', VoterAnswer: '',
            formHidden: false, pollHidden: true, message: true, didTheyVoteLocation: false, seeResults: false,
            TotalSum: 0, 
        };
    }
    
    componentDidMount=()=>{

        axios.get(`http://localhost:3000/getlocationpoll/${this.state.uniqueurl}`)
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
                    AnswerOne: response.data[0].answerone,
                    AnswerTwo: response.data[0].answertwo,
                    AnswerThree: response.data[0].answerthree,
                    AnswerFour: response.data[0].answerfour,
                    AnswerFive: response.data[0].answerfive,
                    TotalSum: (response.data[0].answerone) + (response.data[0].answertwo) + (response.data[0].answerthree) + (response.data[0].answerfour) + (response.data[0].answerfive)
                });
                console.log(this.state)
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

    handleSelect = (event)=>{
        this.setState({
            SelectedValue: event.target.value,
        });
        console.log(this.state.SelectedValue);
    };

    handleSubmitToDatabase = (event)=>{
        event.preventDefault();
        axios
        .post("http://localhost:3000/createlocationpoll", {
            uniqueurl: this.state.uniqueurl,
            choiceone: this.state.ChoiceOne,
            choicetwo: this.state.ChoiceTwo,
            choicethree: this.state.ChoiceThree,
            choicefour: this.state.ChoiceFour,
            choicefive: this.state.ChoiceFive,
        })
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
    };

    handleSubmitVote=()=>{
         if(this.state.SelectedValue === this.state.ChoiceOne){
            this.setState({
            VoterAnswer: "answerone",
            AnswerOne: this.state.AnswerOne + 1,
            TotalSum: this.state.TotalSum + 1
            });
        } else if(this.state.SelectedValue === this.state.ChoiceTwo){
            this.setState({
            VoterAnswer: "answertwo",
            AnswerTwo: this.state.AnswerTwo + 1,
            TotalSum: this.state.TotalSum + 1
           });
        } else if(this.state.SelectedValue === this.state.ChoiceThree){
            this.setState({
                VoterAnswer: "answerthree",
                AnswerThree: this.state.AnswerThree + 1,
                TotalSum: this.state.TotalSum + 1
            });
        } else if (this.state.SelectedValue === this.state.ChoiceFour){
            this.setState({
                VoterAnswer: "answerfour",
                TotalSum: this.state.TotalSum + 1
            });
        } else if (this.state.SelectedValue === this.state.ChoiceFive){
            this.setState({
                VoterAnswer: "answerfive",
                TotalSum: this.state.TotalSum + 1
            });
            console.log(this.state);
            }
        };

    submitVote=()=>{
        axios.put(`http://localhost:3000/votinglocation/${this.state.uniqueurl}`, {
            voteranswer: this.state.VoterAnswer
        })
        .then(response=>{
            console.log('inserted');  
        this.setState({
        message: false,
        didTheyVote: true
        });
        })
        .catch(err=>{
            console.log(err);
        });
       };


    render(){
        const ChoiceThreeRender = (this.state.ChoiceThree === null  ? 'hidden' : 'appear');
        const ChoiceFourRender = (this.state.ChoiceFour === null ? 'hidden' : 'appear');
        const ChoiceFiveRender = (this.state.ChoiceFive === null ? 'hidden' : 'appear');
        const fontsize = 'fontsize';

        if(this.state.pollHidden){
            return(
            <div>
                <strong><h3>Enter up to five locations!</h3></strong>
                <Input type='text' name ="ChoiceOne" id='fontsize' onInput={this.handleChoice} placeholder="Enter first choice here" /><br/>
                <Input type='text' name ="ChoiceTwo" id='fontsize' onInput={this.handleChoice} placeholder="Enter second choice here" /><br/>
                <Input type='text' name ="ChoiceThree" id='fontsize' onInput={this.handleChoice} placeholder="Enter third choice here"/><br/>
                <Input type='text' name ="ChoiceFour" id='fontsize' onInput={this.handleChoice} placeholder="Enter fourth choice here"/><br/>
                <Input type='text' name ="ChoiceFive" id='fontsize' onInput={this.handleChoice} placeholder="Enter fifth choice here"/><br/>
                <br/>
                <Button onClick={this.handleSubmitToDatabase}>Create Your Poll!</Button>

            </div>
            )
            } else if (!this.state.pollHidden && !this.state.didTheyVote){

            return (
                <div>
                    <RenderLocationPoll
                    styling={fontsize}
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
                    <br/>
            
                </div>
            )
        }   else if(!this.state.pollHidden && this.state.didTheyVote)
                return (
                    <div className='fontsize'>
                        <h4>You have selected: <strong>{this.state.SelectedValue}</strong></h4>
                        <label>{this.state.ChoiceOne}
                        <ProgressBar 
                            value={this.state.AnswerOne} color={'blue'} total={this.state.TotalSum} /></label>
                        <label>{this.state.ChoiceTwo}
                        <ProgressBar 
                            value={this.state.AnswerTwo} color={'teal'} total={this.state.TotalSum} /></label>
                        <label id={ChoiceThreeRender}>{this.state.ChoiceThree}
                        <ProgressBar 
                            value={this.state.AnswerThree} color={'violet'} total={this.state.TotalSum} /></label>
                        <label id={ChoiceFourRender}>{this.state.ChoiceFour}
                        <ProgressBar 
                            value={this.state.AnswerFour} color={'green'} total={this.state.TotalSum} /></label>
                        <label id={ChoiceFiveRender}>{this.state.ChoiceFive}
                        <ProgressBar 
                            value={this.state.AnswerFive} color={'black'} total={this.state.TotalSum} /></label>
                        <h3>Total number of votes: {this.state.TotalSum}</h3>
                    </div>
        )
}
}
export default withRouter(CreateLocation);