import React from 'react';
import './menu-item.styles.css';


const MenuItem =({title,imageUrl}) =>(
        
        // <div className='my-container'>
            < >
                
                    <div className="col text-center"><a href="https://google.com">
                    <img src={imageUrl} alt="Person"/><strong className="d-block">{title}</strong></a></div>

            </>
           
            // </div>
       
    
     
)


export default MenuItem;