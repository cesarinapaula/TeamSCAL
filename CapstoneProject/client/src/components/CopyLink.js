import React from 'react';
import { withRouter } from 'react-router-dom';
import { Button} from 'semantic-ui-react';

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
          <div style={{textAlign:'center'}}>
            <form>
              <h3>Share Your Unique PLanz Link With Friends!</h3> 
              <div className = "textarea link">
              <textarea style={{borderRadius:'0.3em', fontSize:'20px'}}
                ref={(textarea) => this.textArea = textarea}
                value={this.state.whatsTheURL}
              />
              </div>
            </form>
            {
             document.queryCommandSupported('copy') &&
          <div>
            <Button inverted onClick={this.copyLink}>Copy Link!</Button> 
            <p>{this.state.copied}</p>
          </div>
            }
          </div>
        );
      }

}

export default withRouter(CopyLink);
