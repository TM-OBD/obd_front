import axios from "axios";

export const sendContact = async (data, token, feedbackSourceIP) => {
    try {
        const response = await axios.put('/api/v1/feedback', data, {
            headers: {
                'token': `Bearer ${token}`,
                'feedback-source-ip': feedbackSourceIP
            }
        });
        console.log('Form data sent successfully:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error sending form data:', error);
        if (error.response && error.response.data) {
            console.error('Backend error:', error.response.data);
            throw new Error(error.response.data.description);
        } else {
            throw new Error('Failed to send feedback data');
        }
    }
};
