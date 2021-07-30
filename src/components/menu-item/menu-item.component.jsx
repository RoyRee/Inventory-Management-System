import React from 'react';
import './menu-item.styles.css';
import { withRouter } from 'react-router-dom';


const MenuItem =({title,imageUrl,history,linkUrl,match}) =>(
        
        <div onClick={() => history.push(`${match.url}${linkUrl}`)}>
            < >
                
                    <div className="col text-center">
                    <img src={imageUrl} alt="Person"/><strong className="d-block" >{title}</strong></div>

            </>
         </div>  
     
)


export default withRouter(MenuItem);