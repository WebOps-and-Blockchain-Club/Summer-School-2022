const db = process.env.DATABASE;

const mongoose = require('mongoose');

const connectMongo = async () => {
    try {
        console.log("connecting mongoose");
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB connect success");
    } catch (err) {
        console.log("Error in connecting database---->", err);
    }
}
connectMongo();
