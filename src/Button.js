import React from 'react';


function Button({disabled, type, log, buttontext}) {
    return (

        <button
            disabled={disabled}
            type={type}
            onClick={() => console.log({log})}
        >{buttontext}
        </button>
    );
}

export default Button