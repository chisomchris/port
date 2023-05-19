import mongoose from "mongoose";

export default async function connectDB ( url = '') {
    mongoose.connect(url)
}