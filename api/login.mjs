import User from "../models/User.mjs";
import dbConnect from "../lib/dbConnect.mjs";
import bcrypt from "bcrypt";

await dbConnect();
console.log("connected to db");

export default async function handler(request, response) {
  if (request.method !== "POST") {
    return response.status(405).json("this methode is not allowed");
  }

  const { name, password } = request.body;

  if (!(name && password)) {
    return response.status(400).json("missing cedential");
  }

  const foundUser = await User.findOne({ name });

  if (!foundUser) {
    return response.status(401).json("user not found");
  }

  const isMatch = await bcrypt.compare(password, foundUser.password);

  if (!isMatch) {
    return response.status(401).json("password is wrong");
  }

  response.status(200).json("toller token kommt hier");
}
