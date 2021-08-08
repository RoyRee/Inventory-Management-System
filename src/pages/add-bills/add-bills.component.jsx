import React from 'react';
import './add-bills.styles.css';
import ProductRow from '../../components/product-row/product-row.component';
import countriesList from '../../components/Autocomplete/countries-list.json';





class AddBills extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ProductDetails:[
                
                    { title: '', Price: '',Quantity:'',id:1 }
                    
                
            ]
        }
        this.Addrow = this.Addrow.bind(this);
    }

     Addrow (event){
        event.preventDefault();
        this.setState(state =>{
            const newProduct = state.ProductDetails.push({ title: '', Price: '',Quantity:'',id: state.ProductDetails.length +1 });
            return {
                newProduct
            };
        });
    };


 


   
    render(){

        
        return(
            
            <div className="container">
                <h1 className="text-center">Add Bills</h1>
                <div className='card shadow p-3 mb-5 bg-white rounded' id='card-vendor-div'>
                 <form>
                        <label>Vendor Name</label>
                        <select className="form-select" aria-label="select Vendor">
                        <option defaultValue>Vendor Name</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>    
                        </select>
                        
                        <div className="row">
                            <div className="col">
                                <label>Invoice Number</label>
                                <input type="text" className="form-control" placeholder="Invoice Number" aria-label="Invoice Number" />
                            </div>
                            <div className="col">
                                <label>Invoice Date</label>
                                <input type="date" className="form-control" placeholder="Bill Date" aria-label="Bill Date" />
                            </div>
                        </div>
                        
                        <div className="row">                            
                           <div className="col">
                            <label>Payment Terms</label>
                            <select className="form-select" aria-label="Payment Terms">
                                <option defaultValue>Payment Terms</option>
                                    <option value="1">Prepaid</option>
                                    <option value="2">Credit</option>
                                    <option value="3">Advance</option>    
                            </select>
                            </div>
                            <div className="col">
                                <label>Delivered Date</label>
                                <input type="date" className="form-control" placeholder="Delivered Date" aria-label="Delivered Date" />
                            </div>
                        </div>
                        <br/>   
              
                        <div className='table-container'>
                    

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">SL</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Model#</th>                            
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                            </tr>
                        </thead>
                            <tbody>
                                {
                                    this.state.ProductDetails.map(({id})=>{
                                        
                                        return(
                                            
                                            <ProductRow key={id} 
                                            data={countriesList} rowCount={id}    /> 
                                            
                                              )
                                    })
                                }

                                
                           </tbody>
                        </table>
                        <button className='button' id='btn-add-row' onClick={this.Addrow}>+  </button>
                     </div>
                     


                        <button className='button' >Save</button>
                                              
                </form>
                </div>
           
            </div>
        )
    }

}

export default AddBills;