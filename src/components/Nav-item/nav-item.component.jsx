import React from 'react';
import './nav-item.styles.css';

const NavItem =({linkUrl,title,imageUrl}) =>(
    <>
    <li className="nav-item">
                <a href={`${linkUrl}`} className="nav-link">
                    
                    <div >           
                        <img src={imageUrl} alt='' id='nav-icons' />
                    </div>
                    <span className="link-text">{title}</span>
                               
                </a>

     </li>
    </>
)

export default NavItem;