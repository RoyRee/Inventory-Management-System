import React from 'react';
import './product-row.styles.css';
import AutoComplete from '../Autocomplete/Autocomplete';


const  ProductRow = (data)=> {
            
        return(
            
            <>                  
                    <tr>
                    <th scope="row">{data.rowCount}</th>
                    <td><AutoComplete data={data.data} /></td>
                    <td><AutoComplete data={data.data} /></td>
                    <td><input type='number'/></td>
                    <td><input type='number'/></td>

                   </tr>
         </>

        )
    
  
}

export default ProductRow;


