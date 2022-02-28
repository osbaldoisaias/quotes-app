import React from 'react';

const Button = ({changeQuote, background}) => {
    return (
            <button onClick={changeQuote} style={{background: background}}><i className="fa-solid fa-shuffle"></i></button>
    );
};

export default Button;