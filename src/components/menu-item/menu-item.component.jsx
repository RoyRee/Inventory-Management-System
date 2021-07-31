import React from 'react';
import './menu-item.styles.css';
import { withRouter } from 'react-router-dom';


const MenuItem =({title,imageUrl,history,linkUrl,match}) =>(
        
        <div onClick={() => history.push(`${match.url}${linkUrl}`)}>
            < div id='card-margin'> 
                    <div className='card shadow p-3 mb-5 bg-white rounded' id='card-image-div'>                   
                        <div className="col text-center">
                          <img className='card-img-top' src={imageUrl} alt="Person" id='card-image' />
                                <div className="card-body">
                                        < h5 className="card-title" >{title}</h5>
                                </div>
                        </div>
                    </div>

            </div>
         </div>  
     
)


export default withRouter(MenuItem);

