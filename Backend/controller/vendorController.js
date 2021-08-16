const Vendor = require('../models/vendor');


const addVendor = async (req,res) =>{
    const vendorData = new Vendor(
        {
            vendor_name: "2020255434",
            vendor_phone: 9922151527,
            vendor_acno: 2020255434,
            vendor_ifsc: "ABCD0000123",
            vendor_bank: "bank",
            vendor_branch: "Nagar",
            vendor_actype: "Current"
        }
    );
    
    try{
        
        await vendorData.save((err)=>{
            if(err){
                console.error(err);
            }else{
                console.log("vendor saved");
                res.status(200).json({message:'vendor saved successfully'});
            }
            
        })
    

    }catch(error){
        console.error(error);
        res.status(500).json({message:'Server error to vendor'});
    }

}


module.exports ={
    addVendor
};