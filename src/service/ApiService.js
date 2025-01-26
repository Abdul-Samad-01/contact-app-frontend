import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080';

const apiService = {
  getLabels: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/contact-label`, {
  
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
    
        withCredentials: true, // Ensures cookies (session) are sent
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching Contacts:', error);
      throw error;
    }
  },

  checkAuthStatus: async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/api/auth-status`, {
        credentials: "include", // Include cookies for session management
      });
      const data = await response.json();
      console.log(data);
      return data.isAuthenticated; // Returns true or false
    } catch (error) {
      console.error("Error checking auth status:", error);
      return false;
    }
  },
};

export default apiService;
