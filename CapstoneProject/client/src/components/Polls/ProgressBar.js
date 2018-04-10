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
<<<<<<< HEAD
export default ProgressBar
=======
export default ProgressBar;
>>>>>>> e3bc7fdb145b776a38927e5ed63eb61038e4a8e6
