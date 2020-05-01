import React from 'react'
import imgHome from '../../assets/home.jpg'
import './style.css'


export default function Home() {
    return(
        <>
            <h1>Heróis Marvel</h1>
            <div className="img">
                   <img src={imgHome} alt=""/> 
            </div>
        </>
    )
}