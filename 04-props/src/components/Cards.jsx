import React from "react"

export default function Cards({imgURL, name, description, LinkedIn}){
    return (
        <>
        <div>
            <img src= {imgURL} alt={name}/>
            <h1>{name}</h1>
            <p>{description}</p>
            <button><a href={LinkedIn}>Check LinkedIN Profile</a></button>
        </div>
        </>
    )
}