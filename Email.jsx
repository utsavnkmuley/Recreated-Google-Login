import React, { useState } from 'react';

function Email() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div className={"emailbox"}>
            <label htmlFor="email-input"></label>
            <input
                type="email"
                id="email-input"
                value={email}
                onChange={handleEmailChange}
                placeholder="Email"
            />
        </div>
    );
}

export default Email;
