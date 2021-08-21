import React,{useState} from 'react';
import './add-vendor.styles.css';
import axios from 'axios';



const AddVendor = () =>{
    const [formData,updateFormData] = useState({vendorName:'',vendorPhone:'',vendorAccount:'',
    vendorIfsc:'',vendorBank:'',vendorBranch:'',vendorAccountType:''});
    const [loading,setLoading] = useState(false);

     const  addNewVendor = async (event) =>{
        event.preventDefault();
         setLoading(true);
        await axios.post(`http://localhost:5000/vendors/addvendor`, formData)
        .then(response => setLoading(false))
        .catch(error => setLoading(false));       
    }

     return(
    <div>
          <h1 className="text-center">Add Vendor details</h1>
           <div className="container">
          <div className='card shadow p-3 mb-5 bg-white rounded' id='card-vendor-div'>
              <div id="form-margin">
                <form onSubmit={event => addNewVendor(event)}>
                
                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Vendor Name :</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Vendor Name"
                            onChange={event => updateFormData({...formData , vendorName: event.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput">Vendor Phone :</label>
                        <input type="number" className="form-control" id="formGroupExampleInput"
                         placeholder="Vendor Phone"
                         pattern="[0-9]{10}"
                         onChange={event => updateFormData({...formData, vendorPhone: event.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Vendor Ac/no :</label>
                        <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Vendor Ac/no"
                        onChange={event => updateFormData({...formData, vendorAccount: event.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Vendor IFSC :</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Vendor IFSC :"
                        onChange={event => updateFormData({...formData, vendorIfsc: event.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Vendor Bank :</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Vendor Bank :"
                        onChange={event => updateFormData({...formData, vendorBank: event.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Vendor Bank Branch :</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Vendor Bank Branch :"
                        onChange={event => updateFormData({...formData, vendorBranch: event.target.value})}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="formGroupExampleInput2">Vendor Account Type :</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Vendor Account Type :"
                        onChange={event => updateFormData({...formData, vendorAccountType: event.target.value})}/>
                    </div>
                    
                    {
                    
                    loading ? (
                        <div className="spinner-border text-success" role="status">
                        <span className="sr-only"></span>
                        </div>
                    ):
                    (
                        <div className="form-group">
                        <button type="submit" className="btn btn-primary" >
                            Add Vendor Details                       
                        </button>
                    </div>
                    )
                        }
                    

                    
               
                    
                    </form>
                </div>
            </div>
        </div>

             

    </div>
     )
     }


export default AddVendor;