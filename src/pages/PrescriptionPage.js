import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Prescription from '../components/prescription/Prescription'

const PrescriptionPage = () => {
  return (
    <div style={{
        display:'flex'
    }}>
      <Sidebar />
      <Prescription />
    </div>
  )
}

export default PrescriptionPage