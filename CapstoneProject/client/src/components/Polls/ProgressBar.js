import React from 'react'
import { Progress } from 'semantic-ui-react';

class ProgressBar extends React.Component {
    render(){
    const {value, total, color } = this.props;
    return (
        <Progress progress='value' value={value} color={color} total={total} />
       )
    }

}

export default ProgressBar;