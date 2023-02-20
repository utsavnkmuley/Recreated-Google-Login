import React from 'react';

const HoverLearn = ({ text, onClick }) => {
    return (
        <button className="hover-learn" onClick={onClick}>
            Learn more
        </button>
    );
};

export default HoverLearn;
