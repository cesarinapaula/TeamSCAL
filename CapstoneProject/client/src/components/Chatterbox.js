import React from "react";
import ReactDom from "react-dom";
import "../index.css";


const generateId = () => {
    return Math.random()
      .toString(34)
      .slice(2);
  };
  const ChatterWall = ({ handleSubmit, inputText, handleInputText }) => (
    <div>
      <h2>Issa Wall </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputText} onChange={handleInputText} />

        <button type="submit"> Post </button>
      </form>
    </div>
  );
  const Comment = ({ comment }) => <li className='comment'>{comment.text}</li>;

  const ChatterList = ({ comments }) => (
    <ul>{comments.map(comment => <Comment comment={comment} />)}</ul>
  );
  

class Chatterbox extends React.Component{
    constructor(){
        super();
        this.state = {
            inputText:"",  
                       
            
            name:"",
            comments:[]            
            
        };
    }
    addComment = e => {
        e.preventDefault();
        const { comments, inputText,name } = this.state;
        const newComment = { text: inputText, id: generateId() };
        const newComments = [newComment,...comments ];
        
        this.setState({
            inputText:"",
            comments: newComments
        });
    };
    handleInputText = e => {
        this.setState({
          inputText: e.target.value
        });
      };
      render(){
        const { inputText, comments } = this.state;
        return(
            <div className='chatterbox'>
                <div className='ChatterWall'>
                <ChatterWall 
                handleSubmit={this.addComment}
                inputText={inputText}
                handleInputText={this.handleInputText}
                />
                </div>
                <div className='chatterlist'>
                <ChatterList comments={comments} />
                </div>
            </div>
        )
      }
}

export default Chatterbox;