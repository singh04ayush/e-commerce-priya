import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {type:String, required:true},
    description: {type:String, required:true},
    price: {type: Number, required:true},
    image: {type: Array, required: true},
    category: {type: String, required: true},
    subCategory: {type:String, required:true},
    bestseller: {type:Boolean},
    latestCollection: {type:Boolean},
    handCraftedtops: {type:Boolean},
    handCraftedSarees: {type:Boolean},
    craft: {type:Boolean},
    clutchesAndPotlis: {type:Boolean},
    stationary: {type:Boolean},
    homeDecor: {type:Boolean},
    date:{type:Number, required: true}
})

const productModel = mongoose.models.product || mongoose.model("product", productSchema);


export default productModel;