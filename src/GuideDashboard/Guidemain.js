import React from 'react'
import GuideSidebar from './GuideSidebar'
import GuideDashboard from './GuideDashboard'

const Guidemain = () => {
  return (
    <>
        <div className='main-container'>
            <div className='sidebar'>
            <GuideSidebar/>
            </div>
            <div className='main-dashboard'>
            <GuideDashboard/>
            </div>
        </div>
        </>
  )
}

export default Guidemain