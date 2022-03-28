import mongoose from "mongoose";

const { Schema, model } = mongoose;

const schema = new Schema(
  {
    name: String,
    password: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("User", schema);
