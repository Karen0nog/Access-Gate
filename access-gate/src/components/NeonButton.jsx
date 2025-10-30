import React from 'react'
import './NeonButton.css'

export function NeonButton({onClick, children, ...props}) {
    return (
        <button className='neon-button' onClick={onClick} {...props}>
            {children}
        </button>
    );
}  