import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import '../../index.css';
import RenderLocationPoll from './PollRenderingLocation';
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
    constructor(props){
        super(props);
        this.state = {
            ChoiceOne: '', ChoiceTwo: '', ChoiceThree: null, ChoiceFour: null, ChoiceFive: null,
            AnswerOne: '', AnswerTwo: '', AnswerThree: '', AnswerFour: '', AnswerFive: '',
            uniqueurl: this.props.location.pathname.slice(-32),
            SelectedValue: '', VoterAnswer: '',
            formHidden: false, pollHidden: true, message: true, didTheyVote: false,
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
                    TotalSum: (response.data[0].answerone) + (response.data[0].answertwo)
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
            VoterAnswer: "answerone"
        });
        console.log(this.state);
    } else if(this.state.SelectedValue === this.state.ChoiceTwo){
        this.setState({
            VoterAnswer: "answertwo"
        });
        console.log(this.state);
    } else if(this.state.SelectedValue === this.state.ChoiceThree){
        this.setState({
            VoterAnswer: "answerthree"
        });
        console.log(this.state);
    } else if (this.state.SelectedValue === this.state.ChoiceFour){
        this.setState({
            VoterAnswer: "answerfour"
        });
        console.log(this.state);
    } else if (this.state.SelectedValue === this.state.ChoiceFive){
        this.setState({
            VoterAnswer: "answerfive"
        });
        console.log(this.state);
}
};

submitVote=()=>{
    axios.put(`http://localhost:3000/votinglocation/${this.state.uniqueurl}`, {
    voteranswer: this.state.VoterAnswer
    })
    .then(response=>{
    console.log(response);
    console.log('inserted');  
    this.setState({
        message: false,
        BaseValue: this.state.BaseValue + 1,
        didTheyVote: true
    });
    
})
.catch(err=>{
    console.log(err);
});
};
render(){
        const formStyling = (this.state.formHidden ? 'hidden' : 'appear');
      //  const timerStyling = (this.state.timerHidden ? 'hidden' : 'appear');
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
                <Button onClick={this.handleSubmitToDatabase}>Create Your Poll!</Button>

            </div>
            
            <RenderLocationPoll
                pollStyle={pollStyling}
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
export default withRouter(CreateLocation);