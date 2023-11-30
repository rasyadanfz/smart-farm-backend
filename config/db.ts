import mongoose from "mongoose"
import dotenv from "dotenv"

dotenv.config()

const DATABASE_URL = process.env.DATABASE_URL || ""

const db = async(): Promise<void> => {
    try {
        const conn = await mongoose.connect(DATABASE_URL)
        console.log(`MongoDB Connected: ${conn.connection.host}`)
    }
    catch (error) {
        console.error(error)
    }
}

export default db