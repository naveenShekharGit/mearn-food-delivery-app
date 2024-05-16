import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://foodeliveryapp:fooddeliveryapp@cluster0.kxtdcma.mongodb.net/food-del').then(() => console.log("DB Connected"));
}

