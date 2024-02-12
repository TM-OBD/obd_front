import axiosInstance from "../http/axiosClassic";

export const getTempOfMotor = async () => {
    try {
        const { data } = await axiosInstance.get(
            `/get/temp_of_motor`,
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
        const { data } = await axiosInstance(
            `/api/channels`,
            (req, res) => {
                return res;
            }
        );
        return data;
    } catch (e) {
        console.log("Error on client's 'api/channels' request:", e);
    }
};

export const sendContact = async (data) => {
    try {
        const response = await axiosInstance.post('/', data);
        console.log('Form data sent successfully:', response.data);
    } catch (error) {
        console.error('Error sending form data:', error);
    }
};
