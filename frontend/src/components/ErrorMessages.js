import React, {Component} from 'react';
import './ErrorMessages.css'
class ErrorMessages extends Component {
    render() {
        const {show, errors} = this.props;

        return (<div>
            {show && errors.length > 0 ?  (
                <div className="error-messages">
                    {errors.map(error => (
                        <p key={error}>{error}</p>
                    ))}
                </div>
            ) : ''}
        </div>);
    }
}

export default ErrorMessages;