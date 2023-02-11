"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", true);
const connectDb = () => {
    mongoose_1.default
        .connect(`${process.env.MONGO_DB_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then((conn) => {
        console.log(`Connected to mongoose on ${conn.connection.port} `);
    });
};
exports.default = connectDb;
