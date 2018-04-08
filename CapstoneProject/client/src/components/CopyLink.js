import React from 'react';
import { withRouter } from 'react-router-dom';

const copyURL = window.location.host;

class CopyLink extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
        copied: '',
        whatsTheURL: copyURL + this.props.location.pathname
    };
    }
      componentDidMount=()=>{
        console.log(this.state)
      }
      copyLink = (event) => {
        this.textArea.select();
        document.execCommand('copy');
        this.setState({ copied: 'Successfully copied! Now, go make Planz!'});
    };

      render() {
        return (
          <div>
     
            <form>
              Share Your Planz Link With Friends!<br/>  
              <textarea
                ref={(textarea) => this.textArea = textarea}
                value={this.state.whatsTheURL}
              />
            </form>
            {
             document.queryCommandSupported('copy') &&
          <div>
            <button onClick={this.copyLink}>Copy Link!</button> 
            <p>{this.state.copied}</p>
          </div>
            }
          </div>
        );
      }

}

export default withRouter(CopyLink);
