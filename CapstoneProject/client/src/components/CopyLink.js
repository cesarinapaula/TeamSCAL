import React from 'react';

const copyURL = window.location.href;

class CopyLink extends React.Component {

  constructor() {
    super();

    this.state = { 
        copied: '',
        whatsTheURL: copyURL 
    };
    }

      copyLink = (e) => {
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

export default CopyLink;
