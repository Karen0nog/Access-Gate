import React from 'react'
import './NeonButton.css'

export function NeonButton({onClick, children }) {
    return (
        <button className='neon-button' onClick={onClick}>
            {children}
        </button>
    );
}  