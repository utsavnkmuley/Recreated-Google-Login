import React from 'react';
import HoverForgot from "./hover-forgot";

const HoverF = () => {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <HoverForgot text="Click me!" onClick={handleButtonClick} />
        </div>
    );
};

export default HoverF;

