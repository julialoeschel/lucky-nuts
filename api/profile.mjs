import { decodeClaims } from "../lib/services/jwt-service.mjs";
import dbConnect from "../lib/dbConnect.mjs";
import User from "../models/User.mjs";

const handler = async (request, response) => {
  if (request.method !== "GET") {
    return response.status(405).json("Methode not allowed");
  }

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json("Unathorized");
  }

  const token = authHeader.replace("Bearer", "").trim();

  try {
    const claims = decodeClaims(token);

    await dbConnect();
    const foundUser = await User.findById(claims.sub);

    if (!foundUser) {
      response.status(403).json("forbiden");
    }
    //to not leak the password: set it to undefined on the response
    foundUser.password = undefined;
    response.status(200).json(foundUser);
  } catch (error) {
    response.status(403).json("forbiden");
  }
};

export default handler;
