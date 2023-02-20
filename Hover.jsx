import React from 'react';
import HoverButton from './hover-button';

const Hover = () => {
    const handleButtonClick = () => {
        console.log('Button clicked!');
    };

    return (
        <div>
            <HoverButton text="Click me!" onClick={handleButtonClick} />
        </div>
    );
};

export default Hover;

