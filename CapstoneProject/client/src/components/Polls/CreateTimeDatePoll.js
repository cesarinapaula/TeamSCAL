import React from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../../index.css';
import RenderTimeDatePoll from './PollRenderingTime';
import { Input, Button} from 'semantic-ui-react';

class CreateTimeAndDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ChoiceOne: '',
            ChoiceTwo: '',
            ChoiceThree: '',
            ChoiceFour: null,
            ChoiceFive: null,
            ChoiceSix: null,
            ChoiceSeven: null,
            ChoiceEight: null,

            AnswerOne: 0,
            AnswerTwo: 0,
            AnswerThree: 0,
            AnswerFour: 0,
            AnswerFive: 0,
            AnswerSix: 0,
            AnswerSeven: 0,
            AnswerEight: 0,

            uniqueurl: this.props.location.pathname.slice(-32),
            SelectedAnswer: '',
            VoterAnswer: '',

            formHidden: false,
            pollHidden: true,
            message: true,
            didTheyVote: false

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
                    console.log(response);
                    console.log(this.state);
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

                        TotalSum: (response.data[0].answerone) + (response.data[0].answertwo)
                    });
                    console.log(response);
                    console.log(this.state);
                }
            })
            .catch(err =>{
                console.log(`didn't work`);
            });

        }
    
    
    handleChoice = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
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
    } else if (this.state.SelectedValue === this.state.ChoiceSix){
        this.setState({
            VoterAnswer: "answersix"
        });
        console.log(this.state);
    } else if (this.state.SelectedValue === this.state.ChoiceSeven){
        this.setState({
            VoterAnswer: "answerseven"
        });
        console.log(this.state);
    } else if (this.state.SelectedValue === this.state.ChoiceEight){
        this.setState({
            VoterAnswer: "answereight"
        });
        console.log(this.state);
    } 
};
        
    

    submitVote=()=>{
        axios.put(`http://localhost:3000/votingtimedate/${this.props.location.pathname.slice(-32)}`, {
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
            console.log(this.state)
        });
    };
//decide between disabling fields until the previous has been filled, or just asking for more options.
    render(){
        console.log(this.state)
        
        const formStyling = (this.state.formHidden ? 'hidden' : 'appear');
        const pollStyling = (this.state.pollHidden ? 'hidden' : 'appear');
        const messageStyling = (this.state.message ? 'hidden' : 'appear');  
        const ChoiceThreeRender = (this.state.ChoiceThree === null  ? 'hidden' : 'appear');
        const ChoiceFourRender = (this.state.ChoiceFour === null ? 'hidden' : 'appear');
        const ChoiceFiveRender = (this.state.ChoiceFive === null ? 'hidden' : 'appear');
        const ChoiceSixRender = (this.state.ChoiceSix === null ? 'hidden' : 'appear');
        const ChoiceSevenRender = (this.state.ChoiceSeven === null ? 'hidden' : 'appear');
        const ChoiceEightRender = (this.state.ChoiceEight === null ? 'hidden' : 'appear');

        return (
            <div>
            <div id={formStyling}>
                <strong><h3>Poll Creation For Date/Time: </h3></strong>
                <h3>Enter your choices below!</h3>
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

                <RenderTimeDatePoll
                pollStyle={pollStyling}
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
            <div>
            <br/>
            <p id={messageStyling}>You've selected: {this.state.SelectedValue}</p>
            </div>
            </div>

            
        )
    }
}

export default withRouter(CreateTimeAndDate);