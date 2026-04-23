import mongoose from "mongoose";

const subscriptionSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    match: [/^\S+@\S+\.\S+$/, "Email inválido"]
  }
}, { timestamps: true });

export default mongoose.model("Subscription", subscriptionSchema);