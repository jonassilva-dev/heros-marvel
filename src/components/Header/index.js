import React from 'react'
import './style.css'


export default function Header() {
    return(
        <>
            <header>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/characters">CHARACTERS</a></li>
                        <li><a href="/comics">COMICS</a></li>
                    </ul>
            </header>
        </>
    )
}