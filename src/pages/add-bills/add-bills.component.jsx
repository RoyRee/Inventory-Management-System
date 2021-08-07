import React from 'react';
import './add-bills.styles.css';
 import ProductRow from '../../components/product-row/product-row.component';




class AddBills extends React.Component{
    constructor(props){
        super(props);
        this.state={
            ProductDetails:[
                
                    { title: 'Harmonium', Price: 200000,Quantity:100,id:1 },
                    { title: 'Guitar', Price: 200000,Quantity:100,id:2 },
                    { title: 'Keyboard', Price: 200000,Quantity:100 ,id:3},
                    { title: 'Tabla', Price: 200000,Quantity:100,id:4 }
                
            ],
            InputTextvalue: [
                {id:1 ,value:'' },
                {id:2 ,value:'' },
                {id:3 ,value:'' },
                {id:4 ,value:'' }
            ]
        }
        this.Addrow = this.Addrow.bind(this);
    }

     Addrow (event){
        event.preventDefault();
        this.setState(state =>{
            const newProduct = state.ProductDetails.push({ title: '', Price: '',Quantity:'',id: state.ProductDetails.length +1 });
            const newInputText=state.InputTextvalue.push({id:state.ProductDetails.length+1});
        
            return {
                newProduct,newInputText
            };
        });
    };


    handleChange = (event) =>{
        console.log(event); 
        this.setState({value: event.target.value})
    }



   
    render(){

        // const {ProductDetails} =this.state; 
        // const data = ProductDetails.map((data)=>{
        //     return(
        //         data.title
        //     )
        // });

        
        return(
            
            <div className="container">
                <h1 className="text-center">Add Bills</h1>
                 <form>
                        <label>Vendor Name</label>
                        <select className="form-select" aria-label="select Vendor">
                        <option defaultValue>Vendor Name</option>
                            {/* <input type='' />                        */}
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
                                    {/* <input type="text" />                        */}
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

                    <table className="table table-striped table-hover">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity </th>
                            </tr>
                        </thead>
                            <tbody>
                                {
                                    this.state.ProductDetails.map(({id, ...otherDetails},)=>{
                                        return(
                                            <ProductRow key={id}  value={this.state.InputTextvalue}
                                            onChangeValue={this.handleChange} {...otherDetails}/>
                                        )
                                    })
                                }
                               
                                
                            </tbody>
                        </table>
                       
                            
                        {/* {console.log(this.state.ProductDetails)}
                            <ProductRow Data={this.props.ProductDetails}/>
                             */}
                        
                    

                        
                </form>
                {/* <br/>
                <div className='auto-div'>
                   
                    { <Autocomplete
                                id="select-product"
                                options={this.state.ProductDetails}
                                getOptionLabel={(option) => option.title}
                                 style={{ width:400  }}
                                renderInput={(params) => <TextField {...params} label="Select Product" variant="outlined" />}
                        />
                    }
              </div> */}
                       {console.log(this.state.value)}
                       <button onClick={this.Addrow}>Add new row </button>
                       

                          

            </div>
        )
    }

}

export default AddBills;