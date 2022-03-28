import User from "../models/User.mjs";
import dbConnect from "../lib/dbConnect.mjs";

await dbConnect();
console.log("Connected to DB");

export default async function handler(request, response) {
  if (request.method === "POST") {
    const result = await User.create(request.body);
    response.json(result);
    return;
  }

  if (request.method === "GET") {
    const users = await User.find();
    response.json(users);
    return;
  }
}
