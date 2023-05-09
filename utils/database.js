import mongoose from "mongoose";

let isConnected= false;

export const connectToDB= async()=> {

    mongoose.set('strictQuery', true);

    if(isConnected){
        console.log("mongoDb is already connected");
        return;
    }else {
        try{
            await mongoose.connect(process.env.URI, {
                dbName: "share_prompt",
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })

            isConnected=true;
            console.log('MongoDb connected')
        }catch(error){
            console.log(error)
        }
    }
}