import React from 'react'

export default function ContentContainer({title, content, mode}) {
    return (
        <div className ={mode==="Light-Theme" ? "blog-container-light" : "blog-container-dark" }>
            <h3>{title}</h3>
            <h4>{content}</h4> 
        </div>
    )
}
