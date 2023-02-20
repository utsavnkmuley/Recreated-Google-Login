import React from 'react';

const HoverForgot = ({ text, onClick }) => {
    return (
        <button className="hover-forgot" onClick={onClick}>
            Forgot email?
        </button>
    );
};

export default HoverForgot;
