const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        console.log("[INFO] Connecting to MongoDB...");
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("[INFO] MongoDB connected");
    } catch (error) {
        console.error("[ERROR] MongoDB connection failed");
        console.log("=============[ERROR]===============");
        console.error(error);
        console.log("====================================");
        process.exit(1);
    }
};

module.exports = connectDB;