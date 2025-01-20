import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const apiService = {
  getLabels: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/contact-label`, {
        headers: {
          'userGoogleId': '104881545322707008576', 
        },
        withCredentials: true, // Ensures cookies (session) are sent
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching labels:', error);
      throw error;
    }
  },
  getContacts: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/contact`, {
        headers: {
          'userGoogleId': '104881545322707008576', 
        },
        withCredentials: true, // Ensures cookies (session) are sent
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Contacts:', error);
      throw error;
    }
  },
  // Add more API methods as needed
};

export default apiService;
