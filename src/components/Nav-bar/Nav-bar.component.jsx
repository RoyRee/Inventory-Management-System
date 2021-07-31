import React from 'react';
import './nav-bar.styles.css';
import NavItem from '../Nav-item/nav-item.component';
import {ReactComponent as ReactLogo} from '../../assests/logo.svg';

class NavBar extends React.Component{

    constructor(props){
        super(props);
        
            this.state={
                navItemData : [
                    {
                        title: 'Vendors List ',
                        imageUrl: 'https://svgshare.com/i/Za7.svg',
                        id:1,
                        linkUrl : 'vendor' 
                    },
                    {
                        title: 'Sales ',
                        imageUrl: 'https://svgshare.com/i/Z_n.svg',
                        id:2,
                        linkUrl : 'sales'
                    },
                    {
                        title: 'Settings ',
                        imageUrl: 'https://svgshare.com/i/ZZv.svg',
                        id:3,
                        linkUrl : 'settings'
                    },
                    {
                        title: 'Add Benificiary ',
                        imageUrl: 'https://svgshare.com/i/Z_k.svg',
                        id:4,
                        linkUrl : 'addBenificiary'
                        
                    },
                    {
                        title: 'QR Scanner ',
                        imageUrl: 'https://svgshare.com/i/ZZY.svg',
                        id:5,
                        linkUrl : 'scanner'
                        
                    },
                    {
                        title: 'QR Scanner ',
                        imageUrl: 'https://svgshare.com/i/ZZY.svg',
                        id:6,
                        linkUrl : 'scanner'
                       
                    }
    
    
                ]
            }
        
    }

    render(){
        return(
            <div className="navbar">
        <ul className="navbar-nav">
            <li className="logo">
                <a href="/" className="nav-link">
                <span className="link-text">Inventory</span>
                <ReactLogo />
                </a>
             </li>

            
            {
                this.state.navItemData.map(({id, ...otherNavProps})=>{
                    return(
                        <NavItem key={id} {...otherNavProps}/>
                    )                   
                })
            }

        </ul>
        
    </div>
        )
    }


}


export default NavBar;