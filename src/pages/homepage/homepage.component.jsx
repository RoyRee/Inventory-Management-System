import React from 'react';
import '../../page-styles/homepage.styles.css';
import Directory from '../../components/Directory/directory.component';


const Homepage =() =>(
    <div className='homepage'>
        <h1 className="text-center">Dashboard</h1>
        <Directory />
    </div>
)


export default Homepage;