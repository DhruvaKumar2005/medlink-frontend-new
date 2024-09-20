import React from 'react'
import Cards from '../cards/Cards'
import PreCards from '../PreCards/PreCards'
import './dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="dashboard-header-container">
        <h2>Hey, Sanjesh</h2>
        <p>You have <span>12 patients</span> requesting prescription refills and <span>4 messages</span></p>
      </div>
      <div className="cards-container">
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="prescription-container">
        <div className="status-container">
          <h3>Prescription Status</h3>
          <PreCards />
          <PreCards />
          <PreCards />
          <PreCards />
          <PreCards />
          <PreCards />
        </div>
        <div className="schedule-container">
          <h3 className='up-header'>Upcoming</h3>
          <div className="schedule-card-container">
            <div className="schedule-card-header">
              <p>CONSULT</p>
              <h3>Dhruva - Standard Consultation</h3>
              <h5>10:30 am - 11:30 am</h5>
            </div>
            <hr />
            <div className="schedule-profile-container">
              <i class="fa-solid fa-circle-user"></i>
              <div className="user-detail-container">
                <h4>Dhruva Kumar</h4>
                <p>(+91) 6746563821</p>
              </div>
            </div>
            <hr />
            <div className="sc-button-container">
              <p>Edit Consult</p>
              <p>Start Consult</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
