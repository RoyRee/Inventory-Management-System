import React from 'react';
import './directory.styles.css';
import MenuItem from '../menu-item/menu-item.component';


class Directory extends React.Component{
    constructor(props){
        super(props);
        this.state={
            sections : [
                {
                    title: 'Benificiary List ',
                    imageUrl: 'https://svgshare.com/i/Za7.svg',
                    id:1,
                    rowvalue: false,
                    linkUrl : 'beneficiary' 
                },
                {
                    title: 'Sales ',
                    imageUrl: 'https://svgshare.com/i/Z_n.svg',
                    id:2,
                    rowvalue: false,
                    linkUrl : 'sales'
                },
                {
                    title: 'Settings ',
                    imageUrl: 'https://svgshare.com/i/ZZv.svg',
                    id:3,
                    rowvalue: true,
                    linkUrl : 'settings'
                },
                {
                    title: 'Add Benificiary ',
                    imageUrl: 'https://svgshare.com/i/Z_k.svg',
                    id:4,
                    rowvalue: false,
                    linkUrl : 'addBenificiary'
                    
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
                    this.state.sections.map(({id,rowvalue, ...otherSectionProps}) =>{

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