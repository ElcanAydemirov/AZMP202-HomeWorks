import React from 'react'

const Custombtn = ({ title, size, bckcolor, transparent, padding, border }) => {
    return (
        <button style={{ fontSize: `${size}`, backgroundColor: `${bckcolor}`, padding: `${padding}`, border: `${border}` }}>{title}</button>
    )
}

export default Custombtn