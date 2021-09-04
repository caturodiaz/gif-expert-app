import React from 'react'

export const GIFgridItem = ( props ) => {

    
    return (
        <div className="card animate__animated animate__fadeInRight">
            <img src={props.url} alt="Imagen" />
            <p>{props.title}</p>
        </div>
    )
}
