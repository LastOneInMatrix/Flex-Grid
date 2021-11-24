import React from 'react';
import './2.css';

export const Grid2 = () => {
    return <div className='mainGridContainer'>
        <div className='gridItem header'>
            Header
        </div>
        <div className='gridItem nav'>
            Nav
        </div>
        <div className='gridItem content'>
            Article
        </div>
        <div className='gridItem add'>
            Adds
        </div>
        <footer className='gridItem footer'> Footer </footer>
    </div>
}