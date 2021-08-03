import React from 'react';
import './directory.styles.css';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sections : [
                {
                    title: 'Add Vendor ',
                    imageUrl: 'https://svgshare.com/i/Z_k.svg',
                    id:1,
                    rowvalue: false,
                    linkUrl : 'Vendor' 
                },
                {
                    title: 'Add Bill ',
                    imageUrl: 'https://svgshare.com/i/Z_n.svg',
                    id:2,
                    rowvalue: false,
                    linkUrl : 'bills'
                },
                {
                    title: 'Settings ',
                    imageUrl: 'https://svgshare.com/i/ZZv.svg',
                    id:3,
                    rowvalue: true,
                    linkUrl : 'settings'
                },
                {
                    title: 'List Vendor',
                    imageUrl: 'https://svgshare.com/i/Za7.svg',
                    id:4,
                    rowvalue: false,
                    linkUrl : 'vendorList'
                    
                },
                {
                    title: 'QR Scanner ',
                    imageUrl: 'https://svgshare.com/i/ZZY.svg',
                    id:5,
                    rowvalue: false,
                    linkUrl : 'scanner'
                    
                },
                {
                    title: 'QR Scanner ',
                    imageUrl: 'https://svgshare.com/i/ZZY.svg',
                    id:6,
                    rowvalue: false,
                    linkUrl : 'scanner'
                   
                }


            ]
           
        }
    }

    render(){

        return(
            
            
            <div className='directory-menu'>
                
                <div className='container'>
                    <div className = 'sub-container'>
                    <div className="row row-cols-sm-1 row-cols-md-3 row-cols-lg-3 row-cols-xl-3"> 
                            

                
                {
                    this.state.sections.map(({id, ...otherSectionProps}) =>{

                        return (   
                                                                                        
                                    <MenuItem key={id} {...otherSectionProps} /> 
                                   
                                                              
                        )
                    })
                }
                     </div>   

                    </div>
                </div>
            </div>
           
              
        )
    }
}


export default Directory;