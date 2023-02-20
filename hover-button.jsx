import React from 'react';

const HoverButton = ({ text, onClick }) => {
    return (
        <button className="hover-button" onClick={onClick}>
            Create account
        </button>
    );
};

export default HoverButton;
