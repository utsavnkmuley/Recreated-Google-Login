import React from 'react';
import HoverLearn from "./hover-learn";

const HoverL = () => {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <HoverLearn text="Click me!" onClick={handleButtonClick} />
        </div>
    );
};

export default HoverL;
