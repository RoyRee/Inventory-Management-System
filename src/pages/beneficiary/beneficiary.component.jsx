import React from 'react';
import './beneficiary.styles.css';


const BeneficiaryForm = () =>(
    <div>
          <h1 className="text-center">Add Vendor details</h1>
           
          <div className='card shadow p-3 mb-5 bg-white rounded' id='card-vendor-div'>
              <div id="form-margin">
                <form>
                
                    <div className="form-group">
                        <label for="formGroupExampleInput">Vendor Name :</label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Vendor Name"/>
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput">Vendor Phone :</label>
                        <input type="number" className="form-control" id="formGroupExampleInput" placeholder="Vendor Phone"/>
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput2">Vendor Ac/no :</label>
                        <input type="number" className="form-control" id="formGroupExampleInput2" placeholder="Vendor Ac/no"/>
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput2">Vendor IFSC :</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Vendor IFSC :"/>
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput2">Vendor Bank :</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Vendor Bank :"/>
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput2">Vendor Bank Branch :</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Vendor Bank Branch :"/>
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput2">Vendor Account Type :</label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Vendor Account Type :"/>
                    </div>

                    <div className="form-group">
                        <button type="submit" class="btn btn-primary">Add Vendor Details</button>
                    </div>
               
                    
                    </form>
                </div>
            </div>
            

             

    </div>
)


export default BeneficiaryForm;