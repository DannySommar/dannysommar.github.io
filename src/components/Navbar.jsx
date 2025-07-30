import { useState } from 'react';

export default function Navbar () {
    return (
        <>
            <nav>
                <ul style={{ display: 'flex', listStyle: 'none', gap: '20px'}}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}