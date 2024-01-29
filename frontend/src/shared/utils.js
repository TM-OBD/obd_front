import axios from "axios";

export const getTempOfMotor = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/get/temp_of_motor",
      (req, res) => {
        return res;
      }
    );
    return data;
  } catch (e) {
    console.log("Error on client's 'get_temp_of_motor' request:", e);
  }
};

export const getChannels = async () => {
  try {
    const { data } = await axios.get(
      "http://localhost:5000/api/channels",
      (req, res) => {
        return res;
      }
    );
    return data;
  } catch (e) {
    console.log("Error on client's 'api/channels' request:", e);
  }
};