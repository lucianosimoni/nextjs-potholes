import { getHostname } from "./serverUrl";
import axios from "axios";
import Pothole from "./interfaces/Pothole";

export async function getAllPotholes() {
  const hostname = getHostname();
  try {
    const response = await axios.get(`${hostname}/potholes/`);
    const potholes: Pothole[] = response.data.potholes;
    return potholes;
  } catch (error) {
    console.log("🔴⚠️ An error ocurred while fetching Potholes");
    console.error(error);

    return null;
  }
}
