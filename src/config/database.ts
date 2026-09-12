import mongoose from "mongoose";
import * as dns from "node:dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

export async function connectDatabase(): Promise<void> {
    await mongoose.connect(process.env.MONGO_URI!);
}