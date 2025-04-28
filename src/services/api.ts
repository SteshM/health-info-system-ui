import axios from 'axios';

// Base URL for the API
const API_URL = 'http://localhost:8080/v1/pragram'; // Replace with your backend API URL

// Health Programs API Calls
export const createProgram = async (programData: any) => {
  return await axios.post(`${API_URL}/health-programs`, programData);
};

export const getHealthPrograms = async () => {
  return await axios.get(`${API_URL}/health-programs`);
};

// Clients API Calls
export const registerClient = async (clientData: any) => {
  return await axios.post(`${API_URL}/clients`, clientData);
};

export const getClients = async () => {
  return await axios.get(`${API_URL}/clients`);
};

// Enroll Client API Call
export const enrollClientInProgram = async (clientId: string, programId: string, enrollmentDate: string) => {
  return await axios.post(`${API_URL}/clients/${clientId}/enroll`, { programId, enrollmentDate });
};
