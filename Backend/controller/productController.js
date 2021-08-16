const Product = require('../models/product');

const getAllProducts = async (req,res)=>{
    try{
        const allProducts = await Product.find({});

        res.json(allProducts);

    }catch(error){
        console.error("server error");
        res.status(500).json({message:'server error'});
    }
}


const getProductById = async (req,res)=>{
    try{
        const oneProduct = await Product.findById(req.params.id);

        res.json(oneProduct);

    }catch(error){
        console.error("server error1");
        res.status(500).json({message:'server error1'});
    }
}

const addProduct = async (req,res) =>{
    const productH = new Product( {
        product_name: "Harmonium",
		product_catid: "H0001",
		models: [{
        sku: "HH7500",
        quantity: 30,
        price: 7500,
        features: {
            reed_orientation: "Horizontal",
            reed_brand: "amrut",
            keys: 39,
            make: "mumbai",
            folding: "no",
            body: "devdar",
            cover: "yes"
        }
    }
    ]
}
);
    try{
        await productH.save((err,productH)=>{
            if(err){
                return console.error(err);
            }else{
                console.log("saved successfully");
                res.status(200).json({message: 'successfully added'});
            
            }
        });
    

    }catch(error){
        console.error("Server error to Add");
        res.status(500).json({message:'Server error to Add'});
    }

}

module.exports ={
    getAllProducts,
    getProductById,
    addProduct
};