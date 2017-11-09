import React from 'react';
import './ErrorMessages.css'

const ErrorMessages = ({show, errors}) => (
    <div>
        {show && errors.length > 0 ? (
            <div className="error-messages">
                {errors.map(error => (
                    <p key={error}>{error}</p>
                ))}
            </div>
        ) : ''}
    </div>
);

export default ErrorMessages;