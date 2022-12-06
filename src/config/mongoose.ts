import mongoose from "mongoose";
import configENV from './configEnv';


const connectMoongose = () => {
    const MONGO_URI = `mongodb+srv://${configENV.MONGO_USER}:${configENV.MONGO_PASSWORD}@cluster0.xolvq.mongodb.net/?retryWrites=true&w=majority`;
    mongoose.connect(MONGO_URI, {
        autoIndex: true,
        dbName: "mercadoLomas",     
    })
        .then(() => console.log("MongoDB connected"))
        .catch((err) => console.log(err));
}
export default connectMoongose



