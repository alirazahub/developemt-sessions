import React from 'react'

function NewComponent({ data }) {
    return (
        <div>
            <h1>{data.name}</h1>
            <div>
                <p>{data.age}</p>
                <p>{data.email}</p>
                <a href="/new.html">Google</a>
                <p>My third paragraph</p>
                <p>My third paragraph</p>
                <p>My third paragraph</p>
            </div>
        </div>
    )
}

export default NewComponent
