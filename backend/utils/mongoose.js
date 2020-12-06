import mongoose from 'mongoose'; 
import config from '../constants/config'; 

export default function () {
    const db = mongoose.connection;
    // connection 실패
    db.on('error', console.error.bind(console, 'connection error: ')); 
    // connection 성공
    db.once('open', function () {
        console.log('DB Connected!'); 
    }); 

    mongoose.connect(config.mongodb, {   
        useUnifiedTopology: true,
        useNewUrlParser: true 
    }); 
}