import mongoose from 'mongoose';
import getConfig from 'next/config';
const {publicRuntimeConfig} = getConfig();

export default async function connectToDb(){
    if(mongoose.connection.readyState >= 1) return;

    return mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.jlc7n.mongodb.net/event?retryWrites=true&w=majority`,{
       
    });
}