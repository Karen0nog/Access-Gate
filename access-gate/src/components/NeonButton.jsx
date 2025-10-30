import React from 'react'
import './NeonButton.css'

export function NeonButton({children, onCLick}) {
    return (
        <button className='neon-button' onClick={onCLick}>
            {children}
        </button>
    );
}