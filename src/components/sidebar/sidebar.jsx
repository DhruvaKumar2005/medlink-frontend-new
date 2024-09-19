import React from 'react'
import './sidebar.css' 

const Sidebar = () => {
  return (
    <div className='sidebar-container'>
        <div className="sidebar-content-container">
            <div className="sidebar-header">
                <p><i class="fa-solid fa-house"></i>Home</p>
                <p><i class="fa-solid fa-message"></i>Messages</p>
                <p><i class="fa-solid fa-scroll"></i>Scripts</p>
                <p><i class="fa-solid fa-gear"></i>Settings</p>
            </div>
            <div className="sidebar-footer">
                <p><i class="fa-solid fa-circle-info"></i>About</p>
                <p><i class="fa-regular fa-circle-question"></i>Help</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
