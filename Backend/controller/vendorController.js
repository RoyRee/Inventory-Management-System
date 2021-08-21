const Vendor = require('../models/vendor');


const addVendor = async (req,res) =>{

    const data  = req.body;

        const vendorData = new Vendor(
            {
                vendor_name: data.vendorName,
                vendor_phone: parseInt(data.vendorPhone),
                vendor_acno: parseInt(data.vendorAccount),
                vendor_ifsc: data.vendorIfsc,
                vendor_bank: data.vendorBank,
                vendor_branch: data.vendorBranch,
                vendor_actype: data.vendorAccountType
            }
        );          
        await vendorData.save((err)=>{
            if(err){
                console.error(err);
                res.status(500).json({message:'server error to vendor',error: err});
            }else{
                console.log("vendor saved");
                res.status(200).json({message:'vendor saved successfully'});
            }
            
        })
    

    

}


module.exports ={
    addVendor
};