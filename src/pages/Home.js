import React from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Dashboard from '../components/dashboard/Dashboard'

const Home = () => {
  return (
    <div style={{
        display:'flex'
    }}>
      <Sidebar />
      <Dashboard />
    </div>
  )
}

export default Home
