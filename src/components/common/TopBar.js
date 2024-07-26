import React from 'react'

const TopBar = ({ title, buttonName }) => {

    const handleButtonClicked = () => {
        alert('Button Clicked')
    }
    return (
        <div>
            <div>{title}</div>
            <button onClick={handleButtonClicked}>{buttonName}</button>
        </div>
    )
}

export default TopBar
