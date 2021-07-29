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
                    rowvalue: false 
                },
                {
                    title: 'Sales ',
                    imageUrl: 'https://svgshare.com/i/Z_n.svg',
                    id:2,
                    rowvalue: false
                },
                {
                    title: 'Settings ',
                    imageUrl: 'https://svgshare.com/i/ZZv.svg',
                    id:3,
                    rowvalue: true
                },
                {
                    title: 'Add Benificiary ',
                    imageUrl: 'https://svgshare.com/i/Z_k.svg',
                    id:4,
                    rowvalue: false
                    
                },
                {
                    title: 'QR Scanner ',
                    imageUrl: 'https://svgshare.com/i/ZZY.svg',
                    id:5,
                    rowvalue: false
                    
                },
                {
                    title: 'QR Scanner ',
                    imageUrl: 'https://svgshare.com/i/ZZY.svg',
                    id:6,
                    rowvalue: false
                   
                }


            ]
           
        }
    }

    render(){

        return(
            
            
            <div className='directory-menu'>
                
                <div className='container'>
                    <div className = 'sub-container'>
                         <div className="row row-cols-3" > 
                            

                
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