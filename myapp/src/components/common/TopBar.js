import React from 'react'

const TopBar = ({ title, buttonName }) => {''

    const [data, setData] = React.useState([
        {
            id: 1,
            name: 'John'
        },
        {
            id: 2,
            name: 'Doe'
        }
    ])

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
