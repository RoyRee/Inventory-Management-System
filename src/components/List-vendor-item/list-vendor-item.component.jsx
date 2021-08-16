import React from 'react';
import './list-vendor-item.styles.css';


const ListVendorItem=({id,vendorName,phoneNumber,vendorBank,balance,recentBill})=>(
    <>          
                <tr>
                   <th scope="row">{id}</th>
                    <td>{vendorName}</td>
                    <td>{phoneNumber}</td>
                    <td>{vendorBank}</td>
                    <td>{recentBill}</td>
                    <td>{balance}</td>
                </tr>
    
    </>

)


export default ListVendorItem;