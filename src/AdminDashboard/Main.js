    import React from 'react'
    import Sidebar from './Sidebar'
    import Dashboard from './Dashboard'
    import '../All-css/main.css'

    const Main = () => {
    return (
        <>
        <div className='main-container'>
            <div className='sidebar'>
            <Sidebar/>
            </div>
            <div className='main-dashboard'>
            <Dashboard/>
            </div>
        </div>
        </>
    )
    }

    export default Main