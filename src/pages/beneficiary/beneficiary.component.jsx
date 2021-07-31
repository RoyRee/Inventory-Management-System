import React from 'react';
import './beneficiary.styles.css';


const BeneficiaryForm = () =>(
    <div>
          <h1 className="text-center">Add Vendor details</h1>
           
           
            <form>
                <div className="form-group">
                    <label for="formGroupExampleInput">Vendor Name</label>
                    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Vendor Name"/>
                </div>

                <div className="form-group">
                    <label for="formGroupExampleInput2">Vendor Ac/no</label>
                    <input type="number " className="form-control" id="formGroupExampleInput2" placeholder="Vendor Ac/no"/>
                </div>

                <div className="form-group">
                    <label for="formGroupExampleInput2">Vendor IFSC :</label>
                    <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Vendor IFSC :"/>
                </div>


            </form>
            

             

    </div>
)


export default BeneficiaryForm;