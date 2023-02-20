import React from "react";
import Button from "./Button";
import Hover from "./hover-button/Hover";
import HoverForgot from "./Forgot Email/hover-forgot";
import HoverLearn from "./Learn more/hover-learn";
import Email from "./Email";


function Design(){
    return(
        <div>
            <div>
                <Email />
                <HoverForgot />
                <HoverLearn />
                <Hover />
                <Button />
            </div>

            <div className="learnable">
                <h5>Not your device? Use Ghost mode and login privately.</h5>
            </div>
            <div className="container">
                <div className="box">
                    <img className={"googleImg"} src="./Google.png" alt="Google" />
                    <h2>Sign in</h2>
                    <h3>to continue to Gmail</h3>
                </div>
            </div>
        </div>

    )
};

export default Design;
