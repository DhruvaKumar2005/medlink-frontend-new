import React from 'react'
import "./precards.css"

const PreCards = () => {
  return (
    <div className='precard-container'>
        <div className="precard-header">
            <h3>Paracetamol</h3>
            <p>Last prescribed on 24 Jan 2024</p>
        </div>
        <div className="precard-info">
            <div className="active-pres">
                <h2>11</h2>
                <p>Active Prescriptions</p>
            </div>
            <div className="refill-req">
                <h2>0</h2>
                <p>Refill Requests</p>
            </div>
        </div>
    </div>
  )
}

export default PreCards
