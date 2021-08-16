import React from 'react';
import './vendor-list.styles.css';
import ListVendorItem from '../../components/List-vendor-item/list-vendor-item.component';



class  VendorList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            VendorDetails:
            [
                {
                    vendorName: 'Rahul',
                    phoneNumber: 9922151527,
                    vendorAccountNumber: 12345679,
                    vendorIfsc: 'SBI0000123',
                    vendorBank:'SBI Bank',
                    vendorBranch: 'Ahmedhnagar',
                    vendorAccountType: 'Savings',
                    id:1,
                    recentBill: '01/08/2021',
                    balance: 20000

                },
                {
                    vendorName: 'Rahul',
                    phoneNumber: 9922151527,
                    vendorAccountNumber: 12345679,
                    vendorIfsc: 'SBI0000123',
                    vendorBank:'SBI Bank',
                    vendorBranch: 'Ahmedhnagar',
                    vendorAccountType: 'Savings',
                    id:2,
                    recentBill: '01/08/2021',
                    balance: 20000

                },
                {
                    vendorName: 'Rahul',
                    phoneNumber: 9922151527,
                    vendorAccountNumber: 12345679,
                    vendorIfsc: 'SBI0000123',
                    vendorBank:'SBI Bank',
                    vendorBranch: 'Ahmedhnagar',
                    vendorAccountType: 'Savings',
                    id:3,
                    recentBill: '01/08/2021',
                    balance: 20000

                }
            ]
        }
    }

    render(){

        return(

        <div className="container">
        <h1 className="text-center">Vendors List</h1>
        <br/>
        <table className="table table-striped table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">vendor Name</th>
                <th scope="col">Phone Number</th>
                <th scope="col">Bank Name </th>
                <th scope="col"> Recent Bill Date</th>
                <th scope="col">Balance</th>
                </tr>
            </thead>
            <tbody>
                
                    {
                        this.state.VendorDetails.map(({id, ...allProps})=>{
                            return(
                                <ListVendorItem key={id} id={id} {...allProps}/>  
                            )                            

                        })
                                             
                    }
            
            </tbody>
           
        </table>
    </div>

    )
        }
}
    


export default VendorList;