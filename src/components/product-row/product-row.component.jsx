import React from 'react';
import { Component } from 'react';
import './product-row.styles.css';


class  ProductRow extends Component{

    render(){

            const{id,Price,Quantity,onChangeValue,value} = this.props;
            
        return(
            <>
                    <tr>
                    <th scope="row">{id}</th>
                    
                    <td><input type="text" id={id} onChange={onChangeValue} /></td>
                    <td>{Price}</td>
                    <td>{Quantity}</td>
                   
                   </tr>
         </>

        )
    }
  
}

export default ProductRow;


{/*  */}